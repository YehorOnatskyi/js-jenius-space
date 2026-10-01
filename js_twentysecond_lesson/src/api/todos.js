const BASE = "http://localhost:3030/todos";

async function request(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Помилка ${response.status}`);
  }
  return response.json();
}

const jsonHeaders = { "Content-Type": "application/json" };

export const getTodos = () => request(BASE);

export const getTodo = (id) => request(`${BASE}/${id}`);

export const createTodo = (todo) =>
  request(BASE, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(todo),
  });

export const updateTodo = (id, todo) =>
  request(`${BASE}/${id}`, {
    method: "PUT",
    headers: jsonHeaders,
    body: JSON.stringify(todo),
  });

export const deleteTodo = (id) =>
  request(`${BASE}/${id}`, { method: "DELETE" });