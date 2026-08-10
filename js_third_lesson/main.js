// -- 1 --
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// Варіант з '?'
function checkAge(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}

// Варіант з '||'
// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }

// console.log(checkAge(20));
// console.log(checkAge(16));

// -- 2 --
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// -- 3 --
// Перепишіть з використанням стрілкових функцій
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function() { alert("Ви погодились."); },
//   function() { alert("Ви скасували виконання."); }
// );

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
);
