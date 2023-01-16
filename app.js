//13.6 Упражнение - кошелёк
//метод увеличения и уменьшения баланса
//{reason: 'налог', sum: -100}
//возвращает true or false еслибаланса не достаточно
//метод числа операций по кошельку

const wallet = {
   balance: 0,
   operations: [],

   increase: function(sum, reason){
      this.balance += sum;
      this.operations.push({reason: reason,
      sum: sum});
      return true;

   },

   countOfOperations: function(){
      return this.operations.length;

   },

   decrease: function(sum,reason){
      if(this.balance > sum){
         this.balance -= sum;
         this.operations.push({reason: reason,
      sum: sum});

         return true;
      }else{
         return false;
      }

   }
  
};

 console.log(wallet.increase(100,'Зарплата'));
 console.log(wallet.countOfOperations());
 console.log(wallet.increase(1000,'Левак'));
 console.log(wallet.countOfOperations());
 console.log(wallet.increase(3000,'Продажа'));
 console.log(wallet.countOfOperations());
 console.log(wallet.decrease(10000000, 'Покупка ноутбука'));
 console.log(wallet.operations);






