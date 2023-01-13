// function power(pow){
//     return function(num){
//         return num**pow;
//     }
// }

// // const powerOfTwo = power(4);//данная переменная и является
// // вложенной анонимной функцией
// console.log(powerOfTwo(5));
//console.log(power(3)(2));//это болеекороткая запись
//каждая скобка идет в глубь вложенной функции 

function power(num){
    return function(pow){
        return num**pow;
    }
}

console.log(power(2)(3));