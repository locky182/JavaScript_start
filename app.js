//Обычная функция
function powerOfTwo(num){
    return num * num;
}
console.log(powerOfTwo(2));

//Стрелочная функция сокращенная запись
//Стрелочная функция также не может всплывать
const poft = (num) => num * num;
console.log(poft(4));

//расширенная запись

const movt = (num) =>
{    
    return num **2;
};
console.log(movt(2));