//map() это преобразование элемента
//возвращает нам новый массив
//map только return
//trunsuctionInRub это массив
const trunsuctionInUsd = [10, 490, 23, 45,21];
const trunsuctionInRub = trunsuctionInUsd
.map((truns) =>{
  return truns * 60;
    
});
console.log(trunsuctionInUsd);
console.log(trunsuctionInRub);
console.log(typeof(trunsuctionInRub));