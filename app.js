const secretNumber = 7;
if(secretNumber == 7){//Проверяет только значение
    console.log('Угадал. Не строгое равенство');
}

if(secretNumber === 7){//Проверяет еще  и значение, и тип!!!!
    console.log('Угадал. Строгое равенство!!');
}
//А если строка то '7' == 7 true
//                  '7' === 7 false
//                  Number('7') === 7 true

let num = prompt('Input num: ');
//let num = Number(prompt('Input num: ')); можно сразу оборачивать считывание строки с браузера
if(num === 7){// false, но если Number(num) === 7 true
//if(Number(num) === 7)true    
    console.log('All are ok!!');

}else{
    console.log('It is not ok');
}