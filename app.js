//12.4 Преобразование строки
const str = 'Вася Пупкина';
console.log(str.startsWith('В'));//true
console.log(str.endsWith('н'));//true
console.log(str.toLowerCase());//'вася пупкин'
console.log(str.includes('у'));//
console.log(str.replace('В','Д'));
console.log(str.replace(/а/g, 'и'));// это regex /а/g -все совпадения меняет на 'и'
//обычно реплейс меняет только первое совпадение

//+++++++++++++++++++++++++++++++++
const str2 = '   Hi, how are      you   ';
console.log(str2.trim());//чистит строку от пробелов
//чистит перед первым словом и после конечного слова