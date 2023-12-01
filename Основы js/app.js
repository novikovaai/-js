/*Пользователь хочет приобрести игру в магазине. Он может это сделать только если:

    Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
    Он не забанен (isBanned)
    Игра не куплена (isExist)
    Игра в продаже (isSelling)

Напишите условие для покупки и выведите в консоль результат.*/

let balance = 0;
let bonusBalance = 0;
let isBanned = false;
let isExist = true;
let isSelling = true;
let canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && isExist && isSelling;

console.log('Возможность покупки:', canBuy);
console.log(true && 'd' || '');