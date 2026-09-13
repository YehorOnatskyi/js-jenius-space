// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
const widget = document.querySelector("[data-widget-name]");
const value = widget.getAttribute("data-widget-name");

console.log(value);
