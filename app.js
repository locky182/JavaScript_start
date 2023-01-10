const role = 'manager';

if(role === 'manager'){
    console.log('manager');
}else if(role === 'ceo'){
    console.log('ceo');
}else{
    console.log('who are you?');
}

const role2 = 'master';
switch(role2){
    case 'manager': // role2 === 'manager'
        console.log('Hi manager');
        break;
    case 'master':
        console.log('Hi, master!!!');
        break;
    default:
        console.log('Who are you?');    

}


const num = 1;
switch(true){
    case num > 0: //true === num > 0
        console.log('Positive');
        break;
    case num < 0:
        console.log('Negative');
        break;
    default:
        console.log('0');        

}