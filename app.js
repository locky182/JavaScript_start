let check = prompt(`Сколько будет 7 + или - 15`);
switch(true){
    case check === 'Я не робот':
    case Number(check) === 22:
    case Number(check) === -8:
        console.log('Успех');
        break;
    default:
        console.log('Извините, вы робот');            
}


