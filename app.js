const cityies = {
   msk: {
      temp:{
         celsius: 24
      }
   },
   spb: {}
};

console.log(cityies.msk.temp.celsius);
//console.log(cityies.spb.temp.celsius);//данных нет
console.log(cityies?.spb?.temp?.celsius);//? оберегает от ошибки
