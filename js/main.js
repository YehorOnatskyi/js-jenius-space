// Якщо змінна більше нуля - виведіть true, менше - false
// let a = 1;
// if (a > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// //Перевірте це на варіантах 1, 0, -3.
// let b = 0;
// if (b > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// let c = -3;
// if (c > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// // Якщо змінна ="test" - виведіть true,
// let d = 'test';
// if (d === 'test') {
//     console.log(true);
// } else {
//     console.log(false);
// }
// //Перевірте це на варіантах 'test',"qwerty", true
// let e = 'qwerty';
// if (e === 'test') {
//     console.log(true);
// } else {
//     console.log(false);
// }
// let f = true;
// if (f === 'test') {
//     console.log(true);
// } else {
//     console.log(false);
// }
// Якщо змінна більше 10 - відніміть 5,
// let g = 1;
// if (g > 10) {
//     console.log(g - 5);
// } else if (g < 10) {
//     console.log(g + 5);
// } else {
//     console.log(g);
// }
// //менше - додайте 5, результат виведіть в консоль
// let h = 13;
// if (h > 10) {
//     console.log(h - 5);
// } else if (h < 10) {
//     console.log(h + 5);
// } else {
//     console.log(h);
// }
// let i = 10;
// if (i > 10) {
//     console.log(i - 5);
// } else if (i < 10) {
//     console.log(i + 5);
// } else {
//     console.log(i);
// }

//Перевірте це на варіантах 1, 10, 13.

//Зробіть сервіс який отримує число від 1 до 12
// let month = 1;
// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Invalid month');
//         break;
// }
// // виведіть місяць який дорівнює числу
//Зробіть сервіс який отримує тризначне число
// let number = 123;
// let firstDigit = Math.floor(number / 100);
// let secondDigit = Math.floor((number % 100) / 10);
// let thirdDigit = number % 10;
// let sum = firstDigit + secondDigit + thirdDigit;
// console.log(sum);
//Поверніть користувачу сумму цих чисел