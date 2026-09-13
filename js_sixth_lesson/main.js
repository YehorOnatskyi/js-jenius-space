// Функція-конструктор Calculator, яка створює об'єкти з трьома методами:
// - read() запитує два значення за допомогою prompt і запам'ятовує їх у властивостях об'єкта
// - sum() повертає суму цих властивостей
// - mul() повертає результат множення даних властивостей
function Calculator() {}

Calculator.prototype.read = function () {
  this.a = Number(prompt("Ваше перше число"));
  this.b = Number(prompt("Ваше друге число"));
};

Calculator.prototype.sum = function () {
  return this.a + this.b;
};

Calculator.prototype.mul = function () {
  return this.a * this.b;
};

const calculator = new Calculator();
calculator.read();

console.log(`Ваша сума ${calculator.sum()}`);
console.log(`Ваш добуток ${calculator.mul()}`);
