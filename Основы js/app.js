/* отсортировать по возрасту */

const users = [
	{ name: 'Вася', age: 30 },
	{ name: 'Катя', age: 18 },
	{ name: 'Аня', age: 40 },
	{ name: 'Петя', age: 25 },
];

users.sort((a, b) => a.age - b.age)

console.log(users)
console.log('------------------')

//Преобразовать к виду {fullName: 'Вася Пупкин', skillNum: 2}

const users2 = [
	{
		name: 'Вася',
		surname: 'Пупкин',
		age: 30,
		skills: ['Разработка', 'Dev0ps']
	},
	{
		name: 'Катя',
		surname: 'Белова',
		age: 18,
		skills: ['Дизайн']
	},
]

usersNew = users2.map(element => {
	return {
		fullName: `${element.name} ${element.surname}`,
		skillNum: element.skills.length
	}
})

console.log(usersNew)

console.log('------------------')

/* Реализовать методы увеличения и уменьшения баланса,
	при котором каждая операция сохраняется в массив
	operations в виде { reason: 'Оплата налогов', sum: -100 }.
	Возвращается true, если успешно и false, если не зватает баланса.
	Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
	balance: 0,
	operations: [],
	income: function (reason, sum) {
		this.operations.push({ reason, sum });
		this.balance += sum;
		return true;
	},
	outcome: function (reason, sum) {
		if (this.balance < sum) {
			console.log('Недостаточно средств')
			return false
		}
		this.operations.push({ reason, sum });
		this.balance -= sum;
		return this.balance >= 0;
	},
	showOperations: function () {
		console.log(this.operations.length)
	},
};

wallet.income('Зарплата', 1000)
wallet.income('Премия', 500)
wallet.outcome('Уплата налогов', 500)
wallet.outcome('Покупка продуктов', 1500)
wallet.showOperations()
console.log(wallet.balance)

console.log('------------------')