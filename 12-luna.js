const cardNumber = '4561-2612-1234-5464'

function checkLuna(card) {
	card = String(card)
	card = card.replaceAll('-', '')
	res = 0
	if (isNaN(Number(card))) {
		return false
	}
	for (let i = 0; i < card.length; i += 2) {
		let second = card[i] * 2
		second > 9 ? res += second - 9 : res += second
	}
	return res % 10 === 0
}

console.log(checkLuna(cardNumber))