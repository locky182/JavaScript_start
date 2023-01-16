const cityes = {
   msk: {
      temp: 24,
      squer: 1000
   },
   spb: {temp: 35,
   squer: 1200}
};

let countOfCity = Object.keys(cityes).length;//длина
console.log(Object.keys(cityes));//возвращает массив ключей['msk','spb'] 
let sumOfTemp = 0;
for(const el in cityes){//проход по обьекту
   
   sumOfTemp += cityes[el].temp;

}

const averageOfTemp = sumOfTemp/countOfCity;
console.log(averageOfTemp);//средняя температура