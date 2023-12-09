/*
Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса
*/

const warehouse = {
	goods: [],
	findGoodById: function (idToFind) {
		return this.goods.find(element => element.id === idToFind)
	},
	addGood: function (nameOfGood) {
		const existedGood = findGoodById(nameOfGood.id)
		if (existedGood){
			console.log('Такой товар уже есть')
			return
		}
		return this.goods.push(nameOfGood)
	},
	getWeightKg: function () {
		return this.goods.reduce((acc, element) => acc += element?.weight?.kg ? element.weight.kg : 0, 0)
	},
};

/* Товары */
const car = {
	id: 1,
	weight: {
		kg: 1000
	},
	brand: 'Ford'
}

const chair = {
	id: 2,
	weight: {
		kg: 2
	}
}

const paper = {
	id: 3,
	color: 'red'
}

warehouse.addGood(car)
warehouse.addGood(chair)
warehouse.addGood(paper)
console.log(warehouse.goods)

console.log(warehouse.findGoodById(2))
console.log(warehouse.getWeightKg())