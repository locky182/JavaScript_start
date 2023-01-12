// разбить строку на массив строк
const url = 'auth/user/login';
const res =  url.split('/');
console.log(res);
console.log(res.at(-1));// получили последний элемент
//+++++++++++++++++++++++++++++++++++++++++
const roles = ['user', 'admin', 'superUser'];
const res2 = roles.join('-');//из массива в строку
console.log(res2);
console.log(typeof(res2))