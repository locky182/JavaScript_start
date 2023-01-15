//12.7 Дополнение строк
const film = 'Звездные войны ';
console.log(film.padStart(20, '*'));//******Звездные войны
console.log(film.padEnd(20,'*'));
console.log(film.padStart(20,'*').repeat(10));//повтор 10 раз