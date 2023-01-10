const balance = 10000;
const bonusBalance = 90;
let isBanned = false;
let isExist = false;
let isSelling = true;
// if((balance > 1000 || bonusBalance > 100) 
//     && (!isBanned) 
//     && (!isExist) 
//     && (isSelling)){
//         console.log('Вы сможете купить игру')
//     }else{
//         console.log('Вы не сможете купить игру');
//     }

let isBuy = ((balance >1000)||(bonusBalance>90))
&&!isBanned
&&!isExist
&&isSelling;
console.log(isBuy? 'Yes':'No');