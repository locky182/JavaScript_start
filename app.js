const arr = [1,3,5,8,9];
//найти первый элемент > 5 = 8
//если не найдет этот элемент то он будет undefined
const firstGT5 = arr.find(elem => elem > 5);
const firstIndexGT5 = arr.findIndex(elem => elem > 3);
console.log(firstGT5);//8
console.log(firstIndexGT5);//2 индекс элемента который больше 3
//если индекс не найден то -1 мы элемент не нашли 
//если индекс элемента === -1 то его нет