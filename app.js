const arr = ['!', 'JS', 'люблю', 'Я'];
    const myMass = [];
for(let i = arr.length - 1; i >= 0; i--){
  myMass.push(arr[i]);


}
console.log(myMass.join(' '));
//arr.reverse().join(' '); это более краткая запись