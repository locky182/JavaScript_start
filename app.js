const score = [11,23,34,47,55,67,77];
// for(const el of score){
//     console.log(`Раунд ${el}`);
// }
//долгий способ
// for(const[index, element] of score.entries()){//метод возвращает индекс и значение
//     console.log(`${index + 1} ${element}`);
//     }
//Стрелочная функция
// score.forEach((element)=>{//стрелочная функция
//     console.log(`Element ${element}`);

// });
//слово функция
//score.forEach(function(el){
//console.log(`Element ${el}`);
//});
//
//
//стрелочная функция без обозначения{}потому что одна строчка
score.forEach((el)=> console.log(`Score ${el}`));
//так же можем поставить вторым аргументом индекс
score.forEach((el, index)=>{
    console.log(`Index of el: ${index + 1} and el: ${el} `);
});
//Здесь будут всегда итерироваться элементы, потому что break нельзя ставить