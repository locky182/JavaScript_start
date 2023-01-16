
const user = {
   firstName: 'Вася',
   lastName: 'Пупкин',
   age: 24,
   skills:['Программирование',
           'готовка'
         ],
         eduPro: 'MFTI'
};
console.log(typeof(user));//object
console.log(user);
console.log(user.firstName);
console.log(user.skills[0]);
console.log(user);
console.log(user['skills']);//подходит для рассчетов
console.log(user.skills);//простой вывод
let str = 'edu';
console.log(user[str + 'Pro'])//MFTI

user['city'] = 'Moscow';//присвоение дополнительного ключ:значение
user.fruitLike = 'qiwi';//так тоже созд ключ:значение
console.log(user);
user.age = 37;//модификация обьекта
console.log(user.age);