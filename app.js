const roles = ['admin', 'user', 'writer'];
const indexOfRoles = roles.indexOf('user');
console.log(indexOfRoles);

if(roles.indexOf('admin') >= 0){//если нет такого то возвращает -1
    console.log('Hello admin!!!');
}

console.log(roles.includes('admin'));//возвращает true, если есть

console.log(roles.includes
    ('superMario')? 'Hi admin': 'getta fuck out hier!');