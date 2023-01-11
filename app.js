const users = ['Anna', 'Vitya', 'Katya'];
console.log(users);
users[2] = 'Kristina';
console.log(users);
// users[3] = 'Nikita';//без проблемдобавил еще элемент
// console.log(users);
// users[8] = 'Sasha';//если добавляем через позиции то появляется дыры-empty
// console.log(users);

users.push('Nikita');//добавление элемента в конец
const arrayLength = users.push('Vasya');
console.log(arrayLength);
console.log(users);
users.unshift('Grisha');//unshift добавление в начало массива
console.log(users);
users.pop();//удаляет последний элемент из массива,также возвращает удаленный элемент
console.log(users);
users.shift();//удаление первого элемента в массиве
console.log(users);
