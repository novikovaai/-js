
const userName = 'Вася aka Terminator Perdinator Пупкин'
const firstName = userName.slice(0, userName.indexOf(' '))
const lastName = userName.slice(userName.lastIndexOf(' ') + 1, userName.length)

console.log(firstName, lastName)


console.log('-----------------')

// Задание: проверить является ли это номером телефона России
// /* верные */
// const num1 = '89103235356';
// const num2 = '+79103235356';
// const num3 = '+7(910)3235356';
// const num4 = '+7(910) 323-53-56';
// const num5 = ' +7(910) 323-53-56 ';
// /* не верные */
// const num1Error = '89103235';
// const num2Error = '+7d910d323-53-56';
// const num3Error = '9+7103235356';
// const num4Error = '89103g35356';

function isNumber(phoneNumber) {
	phoneNumber = String(phoneNumber)
	console.log(phoneNumber)
	phoneNumber = phoneNumber.trim()
	if (!phoneNumber.startsWith('+7') && !phoneNumber.startsWith('8')) {
		console.log('start')
		return false
	}
	if (phoneNumber.lastIndexOf('+') > 0) {
		console.log('+')
		return false
	}
	if (phoneNumber.includes('(') && !phoneNumber.includes(')')
		|| phoneNumber.includes(')') && !phoneNumber.includes('(')
		|| phoneNumber.indexOf('(') > phoneNumber.indexOf(')')
		|| phoneNumber.indexOf('(') !== phoneNumber.lastIndexOf('(')
		|| phoneNumber.indexOf(')') !== phoneNumber.lastIndexOf(')')) {
		console.log('()')
		return false
	}
	for (let num of phoneNumber) {
		if (isNaN(Number(num))
			&& num !== '+'
			&& num !== '-'
			&& num !== '('
			&& num !== ')'
			&& num !== ' ') {
			console.log(num)
			return false
		}
	}
	return true
}

console.log(isNumber('+7(910)323)5356'))

console.log('-----------------')

// Замаскировать карту до последних четырех символов

let card = '2337456783192467'

function maskCard(cardNumber) {
	let n = cardNumber.length
	cardNumber = cardNumber.slice(-4, n)
	cardNumber = cardNumber.padStart(n, '*')
	return cardNumber
}

console.log(maskCard(card))