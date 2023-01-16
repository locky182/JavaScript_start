//метод функции является свойством котрый содержит значение 
const user = {
   firstName: 'Alexey',
   lastName:'Liahov',
   age: 37,
   getUser: function(){
      return this.firstName + ' ' + this.lastName;

   }
};

console.log(user.getUser());