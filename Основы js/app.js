/*
Имеется массив изменения цен prices, где внутри
1й элемент массива является ценой в момент Х,
2й - ценой в момент Y.
Нужно преобразовать данные в массив, где будут отображены
только положительные изменения цен: [100, 150]
*/

const prices = [[100, 150], [300, 250], [200, 120], [100, 600]]

let positiveDelta = prices.map(element => element[1] - element[0]).filter(element => element > 0)

console.log(positiveDelta)

console.log('-----------------------')

/*
Найти среднее значение последоватедьности
чисел с помощью reduce
*/

const arr = [1, 4, 4, 10];

let avg = arr.reduce((acc, element) => {
    return acc + element / arr.length
}, 0)

console.log(avg)

console.log('-----------------------')

/*
Написать функцию, которая возвращает true,
если элемент есть, и false, если нет.
*/

const newArr = [2, 4, 4, 10, 20];

function some(arr, element) {
   return Boolean(arr.find(el => el === element))
}

console.log(some(newArr, 7))

