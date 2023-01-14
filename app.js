const arr = [3,2,45,78,55];
//это самодельная функция
function some(arr, element){
 const res = arr.find((el)=> el === element);
 return res === undefined ? false : true
 
}

const res = some(arr,45);
console.log(res);
//Это встроенная функция sum()
console.log(arr.some(el=> el === 99));//some()/ true/false



