function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

//Функция высшего порядкаб которой подается другая функ в качестве аргумента
//это называется callback
function calculate(a, b, fn){
    console.log(fn.name);
    let res = fn(a, b);
    console.log(res);
    
}

calculate(2,4,subtract);

