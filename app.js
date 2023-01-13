//Итогового баланса
//Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
//Расчёта среднего расхода и среднего дохода

const operations = [1000, -700, 300, -500, 10000];
let accumulyatorOfBalance = 0;
let totalBalance = 0;
let plus = [];
let minus = [];
let sumOfPlus = 0;
let sumOfMinus = 0;

function myTotalBalance(operations){
for(let i = 0; i < operations.length; i++){

    accumulyatorOfBalance = accumulyatorOfBalance
     + operations[i];
    


}
 totalBalance = accumulyatorOfBalance + 100;
     console.log(totalBalance);
}

 function averageOfBalance(operations){
        let averageOfPlus;
        let averageOfMinus;
        for(let i = 0; i < operations.length; i++){
            if(operations[i] > 0){
                plus.push(operations[i])

            }
        }
        for(let i = 0; i < plus.length; i++){
            sumOfPlus = sumOfPlus + plus[i];

        }

        averageOfPlus = sumOfPlus / plus.length;

        for(let i = 0; i < operations.length; i++){
            if(operations[i] < 0){
                minus.push(operations[i]);
            }
        }
        for(let i = 0; i < minus.length; i++){
            sumOfMinus = sumOfMinus + minus[i];
        }
        averageOfMinus = sumOfMinus / minus.length;

        console.log(`Средний положительный доход ${averageOfPlus}`);
        console.log(`Средний отрицательный доход ${averageOfMinus}`);
    }

myTotalBalance(operations);
averageOfBalance(operations);

