let a = 5;
let b = 4.5;
console.log(typeof (b));
console.log(typeof (a));
b = 'Hello';
console.log(typeof (b));
let isAdmin = false;
console.log(typeof (isAdmin));
let isBigger = 5>2;
console.log(isBigger);
console.log(typeof (isBigger));
let c;
console.log(typeof (c));//undefined потому что ничего не присвоили
let d = null;// это пустое значение, оно как бы есть и является пустым
//Например если нам ничего в запросе не вернуло то можноприсвоить null
console.log(typeof (d));//как тип gjrfpsdftn object
console.log(typeof d == null);// false сначала выполняется typeof d
//а потом сравнивает object and null равно false
