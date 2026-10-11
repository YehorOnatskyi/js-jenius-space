const BASE = "http://localhost:3030/todos";

async function request(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Помилка ${response.status}`);
  }

  return response.json();
}

const jsonHeaders = { "Content-Type": "application/json" };

// --- Запасний режим для живої демки --------------------------------------
// На GitHub Pages json-server запустити ніде, тому застосунок показував би
// лише помилку. Якщо сервер не відповів, модуль один раз перемикається
// на localStorage і далі працює з ним.
//
// Важливо: перемикає саме мережевий збій. Відповідь 404 або 500 — це
// робочий сервер, який відмовив, і така помилка летить далі, як і раніше.
// fetch кидає TypeError тільки коли не доїхав узагалі.

const STORAGE_KEY = "todos-demo";

const SEED = [
  {
    id: 1,
    title: "Купити хліб",
    description: "У пекарні на розі",
    completed: false,
  },
  {
    id: 2,
    title: "Помити посуд",
    description: "Після вечері",
    completed: true,
  },
];

let useLocalStore = false;

function readStore() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : SEED;
  } catch {
    return SEED; // приватне вікно або заблоковані дані сайту
  }
}

function writeStore(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {
    // Не змогли зберегти — показуємо те, що є в пам'яті, і не падаємо.
  }
  return todos;
}

const localStore = {
  getTodos: () => readStore(),

  getTodo: (id) => {
    const todo = readStore().find((item) => String(item.id) === String(id));
    if (!todo) {
      throw new Error("Помилка 404");
    }
    return todo;
  },

  createTodo: (todo) => {
    const todos = readStore();
    // Ідентифікатор на сервері проставляв json-server, тут робимо це самі.
    const id =
      todos.reduce((max, item) => Math.max(max, Number(item.id)), 0) + 1;
    const created = { ...todo, id };
    writeStore([...todos, created]);
    return created;
  },

  updateTodo: (id, todo) => {
    const updated = { ...todo, id: Number(id) };
    writeStore(
      readStore().map((item) =>
        String(item.id) === String(id) ? updated : item,
      ),
    );
    return updated;
  },

  deleteTodo: (id) => {
    writeStore(readStore().filter((item) => String(item.id) !== String(id)));
    return {};
  },
};

async function callApi(method, serverRequest, ...args) {
  if (useLocalStore) {
    return localStore[method](...args);
  }

  try {
    return await serverRequest();
  } catch (error) {
    if (error instanceof TypeError) {
      useLocalStore = true; // сервера немає — далі працюємо локально
      return localStore[method](...args);
    }
    throw error; // 404, 500 і решта відповідей сервера — як було
  }
}

// --- Публічний інтерфейс --------------------------------------------------

export const getTodos = () => callApi("getTodos", () => request(BASE));

export const getTodo = (id) =>
  callApi("getTodo", () => request(`${BASE}/${id}`), id);

export const createTodo = (todo) =>
  callApi(
    "createTodo",
    () =>
      request(BASE, {
        method: "POST",
        headers: jsonHeaders,
        body: JSON.stringify(todo),
      }),
    todo,
  );

export const updateTodo = (id, todo) =>
  callApi(
    "updateTodo",
    () =>
      request(`${BASE}/${id}`, {
        method: "PUT",
        headers: jsonHeaders,
        body: JSON.stringify(todo),
      }),
    id,
    todo,
  );

export const deleteTodo = (id) =>
  callApi(
    "deleteTodo",
    () => request(`${BASE}/${id}`, { method: "DELETE" }),
    id,
  );
