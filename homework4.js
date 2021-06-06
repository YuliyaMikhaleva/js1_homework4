"use strict";
// ЗАДАНИЕ 1(это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
// вход число в диапазоне [0, 999],
//     мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//     - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
//     units: 5, //это единицы
//         tens: 4, //это десятки
//     hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
//
let num = parseInt(prompt('Введите целое число от 0 до 999'));
/**
 * Преобразование числа в объект
 * @param num {number} число, которое будет преобразовывать
 * @returns {{}|{tens: number, units: number, hundreds: number}}
 */
function transformate(num) {
    if (num < 0 || num > 999 || !Number.isInteger(num)){
        console.log('Введено некорректное значение');
        return {};
    } else {
        return {
            units: num % 10,
            tens: Math.floor((num/10)%10),
            hundreds: Math.floor(num/100)
        }
    }
}
console.log(transformate(num));

// ЗАДАНИЕ 1.1
// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
// make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
// объект-прототип (как объект transport в уроке).

// В СТИЛЕ ES5

function Product(name,price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *=0.75;
}
let result = new Product("WoW",200);
result.make25PercentDiscount();
console.log(result);

// В СТИЛЕ ES6

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        this.price *=0.75;
    }
}
let result = new Product("WoW",200);
result.make25PercentDiscount();
console.log(result);

// ЗАДАНИЕ 1.2
// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
//     б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
//     Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.

// В СТИЛЕ ES5

function Post(author,text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (text) {
    this.text = text;
}

// let result = new Post('Ivan', "Привет всем", '05.06.2020');
// result.edit("эхехей");
// console.log(result);

function AttachedPost(author,text, date,highlighted) {
    Post.call(this,author,text, date);
    this.highlighted = false
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let result= new AttachedPost('Ivan', "Привет всем", '05.06.2020', false);
result.makeTextHighlighted();
console.log(result);

// В СТИЛЕ ES6

class Post {
    constructor(author,text,date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.text = text;
    }
}
// let result = new Post('Ivan', "Привет всем", '05.06.2020');
// result.edit("эхехей");
// console.log(result);

class AttachedPost extends Post{
    constructor(author,text, date,highlighted) {
        super(author,text,date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}

let result= new AttachedPost('Ivan', "Привет всем", '05.06.2020', false);
result.makeTextHighlighted();
console.log(result);


