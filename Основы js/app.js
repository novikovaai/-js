/* Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:

	Boolean переменную успеете ли вы взяться за работу
	Сколько вы за неё попросите? */

const stavka = 80;
const hours = 5;
const days = 5;
const week = 7;
let zakaz = 40;
let totalDays = 11;

let workDays = totalDays - Math.floor(totalDays / week) * 2;
let workHours = workDays * hours;


console.log(workHours >= zakaz);
console.log(zakaz * stavka)


let a = 'aaa'
console.log(a + 3)
