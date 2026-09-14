// 1. Напишіть такий JavaScript, щоб після натискання на кнопку button,
// елемент <div id="text"> зникав.
const hider = document.querySelector("#hider");

hider.addEventListener("click", function () {
  document.querySelector("#text").hidden = true;
});

// 2. Напишіть такий код, щоб після натискання на кнопку, вона зникала.
const selfHider = document.querySelector("#self-hider");

selfHider.addEventListener("click", function () {
  selfHider.hidden = true;
});

// 3. Створіть дерево, яке показує/приховує дочірні вузли при кліці.
const tree = document.querySelector("#tree");

tree.addEventListener("click", function (event) {
  if (event.target.tagName !== "SPAN") return;

  const ul = event.target.parentElement.querySelector("ul");
  ul.hidden = !ul.hidden;
});
