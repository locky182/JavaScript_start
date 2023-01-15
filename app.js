//замаскировать все кроме последних 4 символов
//************5678
const cart = '1234567812345678';
const cart1 = '1234123412348888';

function maskCreditCard(cart){
//   let res = cart.split('');
//   let delArr = res.splice(12,4);
//   //console.log(res);
//   let str = delArr.join(''); 
//   console.log(str.padStart(16,'*'));
//+++++++++++++++++++++++++++++++++++++++
//Решение преподавателя
console.log(cart.slice(-4).padStart(16,'*'));//возвращает 4 последних элемента и прибавляет вначало*******
   }
   



maskCreditCard(cart1);

