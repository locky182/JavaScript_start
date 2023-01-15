//Задача на выделение имени
//Вывод 'Вася Пупкин'
let userName = 'Вася aka Terminator Пупкин';
// let res = userName.split(' ');
// res.splice(1,2);
// const fullName = res.join(' ');
// console.log(fullName);

const firstName = userName.slice(0, userName.indexOf(' '));
console.log(firstName);//возвращает строку в указанном диапозоне 'Вася'
console.log(typeof(firstName));
const lastName = userName
    .slice(
     userName.lastIndexOf(' ') + 1, userName.length);
     console.log(lastName);

     console.log(`${firstName} ${lastName}`);

