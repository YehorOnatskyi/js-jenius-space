// Телефонна книга:
// - клас Abonent, де зберігатимуться ім'я і номер
// - set, який прийматиме ім'я і номер
// - get, який виводитиме дані про абонента
// - три різних юзери, вивести дані
class Abonent {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  setData(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  getData() {
    return `${this.name}: ${this.phone}`;
  }
}

const alex = new Abonent("Олексій", "+380937128711");
const igor = new Abonent("Ігор", "+380937128713");
const fedor = new Abonent("Федір", "+380937128714");

alex.setData("Alexii", "+380937128722");

console.log(alex.getData());
console.log(igor.getData());
console.log(fedor.getData());
