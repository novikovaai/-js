/* Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
Необходимо написать функцию, которая бы удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`] */

const datesArr = [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`, `k/pp/2023`, `11/02/202t`, `29-02-2001`, `29-02-2000`]

function filterDates(array) {
	return array
		.filter(element => (element.includes('-') // убираем элементы без нужных символов
			|| element.includes('/')) // убираем элементы без нужных символов
			&& checkDate(element.slice(0, 2), element.slice(3, 5), element.slice(6)) // проверка правильности даты
		)
		.map(element => element.replaceAll('/', '-')); //приводим все оставшиеся элементы к одному виду
}

// проверка на високосный год
function checkLeapYear(year) {
	return Number(year) % 400 === 0 || Number(year) % 100 !== 0 && Number(year) % 4 === 0;
}

function checkDate(day, month, year) {
	day = Number(day);
	month = Number(month);
	year = Number(year);
	if (isNaN(day) || isNaN(month) || isNaN(year)) {
		return false
	}
	switch (month) {
		case 2: //февраль
			return day > 0
				&& checkLeapYear(year) //проверка на вискосный
				? day < 30
				: day < 29;
		case 4: //апрель
		case 6: //июнь
		case 9: //сентябрь
		case 11: //ноябрь
			return day > 0 && day < 31;
		default: //остальные месяцы
			return day > 0 && day < 32;
	}
}

console.log(filterDates(datesArr))
