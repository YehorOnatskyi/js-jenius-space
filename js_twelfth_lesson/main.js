const URL_USERS = "https://jsonplaceholder.typicode.com/users";

// Завдання 1. Те саме через ланцюжок .then (результат у консолі).
function loadUsers() {
  fetch(URL_USERS)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Сервер ответил " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

//loadUsers();

// Завдання 2 і 3. async/await + try...catch, вивід на сторінку по кнопці.
const btn = document.querySelector("#load");
const list = document.querySelector("#list");
const statusEl = document.querySelector("#status");

btn.addEventListener("click", loadUsers2);

async function loadUsers2() {
  statusEl.textContent = "Завантаження…";
  try {
    const response = await fetch(URL_USERS);
    if (!response.ok) {
      throw new Error("Сервер ответил " + response.status);
    }
    const data = await response.json();

    list.innerHTML = "";
    data.forEach(function (user) {
      const li = document.createElement("li");
      li.textContent = user.name;
      list.append(li);
    });
    statusEl.textContent = "";
  } catch (error) {
    statusEl.textContent = "Помилка: " + error.message;
  }
}

// Завдання 4. Перевірено на зламаній адресі ".../userssss":
// сторінка показала "Помилка: Сервер ответил 404" — спрацював if (!response.ok).
