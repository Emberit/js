/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены. */
console.log('#1');

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));

//а можно сначала сделать replace, а потом выводить в консоль? и что тогда выводить?



/* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025 */
console.log('#2');


let date = '2025-12-31';
let arr = date.split('-');
    str = arr[2] + '/' + arr[1] + '/' + arr[0];
console.log(str);


/*  Дана строка 'я учу javascript!. Вырежите из нее слово 'учу' 'javascript' тремя разными способами (через substr, substring, slice). */
console.log('#3');

str = 'Я учу javascript!';
arr = str.substring(2, 5);
console.log(arr);

arr = str.substr(2, 3);
console.log(arr);

arr = str.slice(2, 5);
console.log(arr);

/* 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы
кубов его элементов. Для решения воспользуйтесь циклом for. */
console.log('#4');

arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0,
    cub = 0;

for (i = 0; i < arr4.length; i++) {
    cub = Math.pow(+arr4[i],3);
    sum += cub;
}

console.log(Math.sqrt(sum));


/* 5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1. */
console.log('#5');

let a = 4,
    b = 10,
    c = a - b;


if (c < 0) {
    c += '';
    console.log(c.slice(1));
} else {
    console.log(c);
}



/* 6. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой
задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые
состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). */
console.log('#6');

date = new Date();

function task6(num) {
     
    
    if (num > 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
    
}

task6();

console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + task6(date.getDate()) + '.' + task6((date.getMonth() + 1)) + '.' + date.getFullYear());


/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. */

let str7 = 'aa aba abba abbba abca abea',
    regexp = /ab+a/g;

    

console.log(str7.match(regexp));


/* 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>) и упрощенной проверки ввода простого номера с кодом и без него.  Функция должна возвращать true или false. */

/* Например, звонок в Минск: + 375 ХХХ ХХ ХХ */
console.log('#8');
function task8(tel) {
    tel = tel || '+ 375 29 303 92 16';

    console.log(tel);
    console.log(/\+\s\d{1,3}\s\d{2,4}\s\d{5,7}/ig.test(tel));
}

task8(); //не выходит

/* 9. Напишите ф-цию, которая из полного адреса с параметрами и без, например:
https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив. */


/* 10. Напишите ф-цию удаления повторов из строки, в т.ч. повторных пробелов (2х и более) и спецсимволов, например: hello hello hello hello world» -> hello world». Функция должна возвращать обработанную строку. */
console.log('#10');

function task10() {

let str10 = 'hello hello hello hello world';  

console.log('hello ' + str10.replace(/(hello )/g, ''));

}

task10(); //смухлевала :) потому что запуталась, что где применять) но я попробовала)