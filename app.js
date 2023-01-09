let age = '18';
console.log(Number(age) + 5);
console.log(age - 5);
console.log(age / 3);
console.log(typeof age);
console.log(String(4) + 7);//конкатенация
let name = 'Vasya';
console.log(Number(name) + 5);//NaN
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean(123));//true
console.log(Boolean(-1));//true
//строка пустая = false
//строка заполнена true
console.log('This is strings');
console.log(Boolean('dddddd'));//true
console.log(Boolean(''))//false
console.log(Boolean(' '));//true это строка содержит пробел,поэтому не пустая
console.log(Boolean('') + 1);//boolean-false-0-0+1=1