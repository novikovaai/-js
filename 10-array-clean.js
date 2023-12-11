/* Напишите функцию, которая принимает:
-Массив чисел
-Функцию удаления элементов
И возвращает отфильтрованный массив. При этом функция удаления элементов принимает
число и возвращает true, если его надо удалить и false, если надо оставить */


function filterArr(arr, fn) {
	newArr = [];
	for (let element of arr) {
		if (!fn(element)) {
			newArr.push(element)
		}
	}
	return newArr
}

const toDelete = num => num < 0;
const numbers = [1, 5, -9, -4, 0, 7, -11, 355]

console.log(filterArr(numbers, toDelete))