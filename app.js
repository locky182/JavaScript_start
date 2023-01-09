//Шаблонные строки
const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

//const template = author + ' заказал '
 //+ projectName + ' по цене '
  //+ price + ' рублей';
  const template2 = `${author} заказал ${projectName} по цене ${price} рублей`

console.log(template2);
//переход на другую строку без спецсимвола \n 
const template3 = `Цена: 2000
Товар: nokia 3110`;
console.log(template3);