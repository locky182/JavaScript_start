//const {el, ...NameOfPropertyWhoStand} = user// rest -...
let user = {
   firstName: 'Pasha',
   age: 40,
   city: 'Moscow'
}

const {age, ...userWithOutAge} = user;//деструктуризация обьекта
console.log(age);//вытащили отдельно свойство
console.log(userWithOutAge);
//+++++++++++++++++++++++++++++++
//добавить в обьект
const additionalData = {
   skills: ['Готовка', 'Программинг'],
   creditCard: '123456789'
};

user.skills = additionalData.skills;//добавление в обьект
user = {
   ...user,//таким образом все переходит с usera
   ...additionalData//все переходит из даты и не надо конкретно поле присваивать
}
console.log(user);

//const обьектам если дополнительно наполняются свойства но не идет перезапись
