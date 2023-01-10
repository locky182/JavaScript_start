const bmw = 20000;
bmw > 10000?console.log('Велосипед'):console.log('Bmw')//это выражение
//if(bmw>10000){
//console.log('bike');
//}else{
// console.log('Bmw')
//}

//let result = bmw > 5000?'Bike':'Another';//Это выражение
//console.log(result);

//По своей сути if является утверждением
//утверждениемы не можем засунуть в переменную
//Выражение можем засунуть в `${}`
//утверждение это statement
console.log(`Я куплю новый мерседес ${bmw > 5000?'AMG':'Another'}`);