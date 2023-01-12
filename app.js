function getData(){
    return ['Anton', 18, 'Moskow'];
}

// const userName = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

// console.log(userName + age + city);

//const [userName, age, city] = getData();//деструктуризация
const [userName,_, city] = getData();//что не нужно можем опустить
//console.log(userName + ' ' + age + ' ' + city);
console.log(userName, city);