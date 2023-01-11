const role1 = 'user';
const role2 = 'admin';
const role3 = 'superUser';

const roles = ['user', 'admin', 'superUser'];//массив строк
const userInfo = ['Anna', 25];
console.log(roles);
console.log(roles[0]);
console.log(roles.length);//это свойство массива -> длина
console.log(roles[roles.length - 1]);//получение последнего элемента массива
console.log(roles.at(0))//новая фича по выведению элементов
console.log(roles.at(-1));//получение последнего элемента в массиве
const usersAge = [2022 - 2021, 10>0? '5': '10'];// можно и так, а смысл?
console.log(usersAge);
const userNames = new Array('Vasya', 'Petya');//Еще один способ
console.log(userNames);