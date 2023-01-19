'use strict'
//Замыкание

function changeBalance(){
    let balance = 0;
    return function(sum){
        balance += sum;
        console.log(`Баланс: ${balance}`)

    }
}

const change = changeBalance();
change(100);
change(50);
change(15);
console.dir(change);