//создание массивов
const arr = new Array(4);//количество элементов
console.log(arr);//empty пустой массив
console.log(arr.fill(1));//массив заполнен единицами
//++++++++++++++++++++++++++++++++++++
const arr2 =  Array.from({length: 5},(cursor,i)=> i+1)
console.log(arr2);