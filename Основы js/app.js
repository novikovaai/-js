/* Задание для упражнения:
Пользователь:

    Возраст
    Наличие работы
    Деньги

Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false. */


function canBuy(age, job, money, cost) {
    if (age > 24 && job) {
        return money + 500 >= cost
    } 
    else if (age > 24) {
        return money + 100 >= cost
    };
    return money >= cost;
}

let age = 25;
let job = true;
let money = 1900;
const macBookPrice = 2000;


console.log(canBuy(age, job, money, macBookPrice))
