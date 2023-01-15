//работа со строками
//строка это массив букв

const firstName = 'Вася Пупкинс';
console.log(firstName[4]);//' '
console.log(firstName[5]);//'П'
console.log(firstName[0]);//'В'
console.log(firstName.charAt(0));//'В'
const lastName = 'Кукушкина'[0];//можно и так
console.log(lastName);
console.log(firstName.length);//11, пробел посчитан как символ
console.log(firstName.indexOf('а'));//индекс первой встречающейся буква а
console.log(firstName.lastIndexOf('с'));//последний индекс посл встреч
console.log(firstName.includes('я'));//true
console.log(firstName.slice(4));//' ' + 'Пупкинс'обрезано до
console.log(firstName.slice(5));//'Пупкинс' отрезано с 5 индекса
console.log(firstName.slice(5,8));//'Пуп' все обрезано с 5-8 исключая 8
console.log(firstName);