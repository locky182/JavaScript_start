console.log('Вася'||'Олег');//true
console.log(false||'Олег');//Олег
console.log(false||false);//false
console.log('Вася'||false);//Вася
//следовательно выводит только true,а любое имя это true
console.log('Вася'&&'Maga');//true будет судить попоследнему по Maga