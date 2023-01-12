const url = 'https://purpleschool.ru/course/javascript';

//Протокол (https)
//Доменное имя (purpleschool.ru)
//Путь внутри сайта (/course/javascript)

function getUrlParts(url){
const [protocol, _, host, ...path] = url.split('/');
if(protocol === 'https:'|| protocol ==='http:'){
    console.log(protocol, host, path);
    console.log(`Протокол ${protocol.split(':')[0]}`);
    console.log(`Доменное имя ${host}`);
    console.log(`Путь внутри сайта /${path.join('/')} `);

}
}

getUrlParts(url);