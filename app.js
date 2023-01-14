//reduce это сужение до одного значения
// return accumulyator + value()-текущеезначение
//не обязательно суммировать, можно выводитьминимальный элемент

const balance = [45,12,56,87];

// let sumOfBalanse = 0;

// for(const el  of balance){
//   sumOfBalanse += el;
// }
// console.log(sumOfBalanse);
 
// const totalBalance = balance
//     // .reduce((accum, elem) => accum + elem );
//     // console.log(totalBalance);
//     .reduce((accumulate, valueOfBalance)=>{
//       return accumulate += valueOfBalance;
//     },0);// 0 после тела функции это чему равен аккумулятор изначально

//     console.log(totalBalance);//сложение

    //поиск минимального элемента
    let minBalance = balance
    
    .reduce((accumulate, valueOfBalance)=>{
      if(valueOfBalance > accumulate){
        return accumulate;

      }else{
        return valueOfBalance;
      }
      
    });

    console.log(minBalance);