// -- 1 --
// Об'єкти студентів: ім'я, спеціальність, середній бал, кількість пропущених занять.
// Метод виводить інформацію. Виклик через call, apply та bind.
function showStudent(course) {
  console.log(
    `Ім'я ${this.name}, Спеціальність ${this.spec}, Середній бал ${this.avg}, Відсутність ${this.abs}, курс ${course}`,
  );
}

const alex = {
  name: "Олексій",
  spec: "Географія",
  avg: 4.1,
  abs: 6,
};
const sanny = {
  name: "Олександр",
  spec: "Біологія",
  avg: 3.5,
  abs: 9,
};
const gregory = {
  name: "Григорій",
  spec: "Математика",
  avg: 5,
  abs: 0,
};

showStudent.call(alex, 2);
showStudent.apply(sanny, [3]);

const thirdStudent = showStudent.bind(gregory, 1);
thirdStudent();

// -- 2 --
// Дві кнопки: HTML та CSS. По кліку показати коротке визначення.
function showHtml() {
  alert("HTML - це мова розмітки");
}

function showCss() {
  alert("CSS - це мова стилів");
}

const btnHtml = document.querySelector("#btn-html");
btnHtml.addEventListener("click", showHtml);

const btnCss = document.querySelector("#btn-css");
btnCss.addEventListener("click", showCss);

// -- 3 --
// Функція магазину: назва товару, ціна за кг, вага. Повертає назву та вартість.
function shop(name, price, weight) {
  const cost = (price * weight).toFixed(2);
  return `${name}: ${cost} грн, ${weight} кг`;
}

console.log(shop("banana", 30, 4.5));
console.log(shop("cherry", 58, 1.3));
console.log(shop("orange", 89, 3.4));
