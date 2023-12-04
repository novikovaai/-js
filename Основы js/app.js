// Задача вывести в консоль строку "Я люблю JS !" из массива, проходя циклом в обратном порядке и не используя reverse

const arr = ['!', 'JS', 'люблю', 'Я'];
let newArr = []

for (let i = -1; i >= -(arr.length); i--){
    newArr.push(arr.at(i))
}

console.log(newArr.join(' '))

console.log('-----------------')
/*
Есть выгрузка  операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же  начальный баланс в 100$
Необходимо сделать функции расчета:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
- Расчета среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
let balance = 100;

function balanceLeft(balance, operations) {
    for (let element of operations) {
        balance += element;        
    }
    return balance
}

function checkNegative(balance, operations) {
    for (let element of operations) {
        balance += element;
        if (balance < 0) {
            return false
        }
    }
    return true
}

function median(operations) {
    let income = 0;
    let incomeT = 0;
    let outcome = 0;
    let outcomeT = 0;
    for (let element of operations) {    
        switch (true) {
            case element >= 0:
                income += element;
                incomeT++;
                console.log('+', income);
                break;
            case element < 0:
                outcome += element;
                outcomeT++;   
                console.log('-', outcome);
                break;
        }       
    }    
    return [income / incomeT, outcome / outcomeT]
}

console.log(balanceLeft(balance, operations))
console.log(checkNegative(balance, operations))
let medianOp = median(operations)
console.log(`Средний доход ${medianOp[0]}$`)
console.log(`Средний расход ${-medianOp[1]}$`)