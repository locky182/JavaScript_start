function canAccesWebsite(age){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

const isCan = canAccesWebsite(17);
//console.log(isCan);

const canAccesWebsite2 = (age) => age < 18 ? 'No': 'Yes';
console.log(canAccesWebsite2(16));