/* Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
Необходимо написать функцию, которая бы удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`] */

const datesArr = [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`, `k/pp/2023`, `11/02/202t`, `29-02-2001`, `29-02-2000`]

function filterDates(array) {

	// фильтрация массива
	return array
		.map(element => element.split('')) //делаем массив из каждого элемента
		.filter(element => element.includes('-') || element.includes('/')) // убираем элементы без нужных символов
		.map(element => { //приводим все оставшиеся элементы к одному виду
			return element.includes('-')
				? element.join('').split('-')
				: element.join('').split('/');
		})
		.filter(element => element.length === 3 && Number(element[2])) // проверяем правильность длины даты и что год - это число
		.filter(element => Number(element[1]) > 0 && Number(element[1]) < 13) // проверяем правильность месяца
		.filter(element => { //проверяем правильность числа
			switch (Number(element[1])) {
				case 2: //февраль
					return Number(element[0]) > 0
						&& checkLeapYear(element[2]) //проверка на вискосный
						? Number(element[0]) < 30
						: Number(element[0]) < 29;
				case 4: //апрель
				case 6: //июнь
				case 9: //сентябрь
				case 11: //ноябрь
					return Number(element[0]) > 0 && Number(element[0]) < 31;
				default: //остальные месяцы
					return Number(element[0]) > 0 && Number(element[0]) < 32;
			}
		})
		.map(element => element.join('-')) //делаем каждый элемент правильной строкой

}

// проверка на високосный год
function checkLeapYear(year) {
	return Number(year) % 400 === 0 || Number(year) % 100 !== 0 && Number(year) % 4 === 0;
}


function filterDatesWithDate(array) {
	return array
		.filter(element => !isNaN(new Date(element).getTime()))
		.map(element => element.split('/').join('-'))
}

console.log(filterDates(datesArr))
console.log(filterDatesWithDate(datesArr))

