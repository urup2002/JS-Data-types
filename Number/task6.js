/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.
Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/
function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
    }
    console.log(random(1, 5));
    console.log(random(1, 5));
    console.log(random(1, 5));
   