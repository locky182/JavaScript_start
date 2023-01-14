//filter фильтрация данных
//возвращает новый массив
//оставитьэлементы которые удовлетворяют этому условию
//возвращает значение если true
//фильтрует все что false
const operations = [-40,1,-56,2,-54];
// let positivOperations = [];
// for(operatia of operations){
  
//   if(operatia > 0){
//     positivOperations.push(operatia);

//   } 

// }
// console.log(positivOperations);

// const positivOperations = operations
// .filter((operatia) =>{
//     return operatia > -40;
// });
// console.log(positivOperations);

//это приминение сразу filter and map
const positiveOperationInRub = operations
    .filter((operatia) => operatia > 0)
    .map((operatia) => operatia * 60);

    console.log(positiveOperationInRub);
