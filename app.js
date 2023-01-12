const data = [1, 2, 3, 4, 5, 6];
const [one, two, three, ...others] = data;
console.log(one, two, three, others);
console.log(typeof(one));//Number
//others is array
//others [4,5,6]