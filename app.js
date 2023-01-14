//вывести среднее число массива
//суммировать и разделить на количество элементов
const arr = [1,4,4,10];
const result = arr
    .reduce((accum, el, i) =>{
      if(i != arr.length-1){
        return accum += el;
      }else{
        return (accum +el)/arr.length;
      }
    },0)

 console.log(result);