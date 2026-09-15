// Чернетка форми: введене ім'я зберігається в localStorage
// і повертається в поле після перезавантаження сторінки.
const input = document.querySelector("#name");

const draft = localStorage.getItem("draft-name");
if (draft !== null) {
  input.value = draft;
}

input.addEventListener("input", function () {
  localStorage.setItem("draft-name", input.value);
});
