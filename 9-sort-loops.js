// Дан массив чисел const arr = [1, 40, -5, 10, 0];
// Написать функцию, которая сортирует данный массив при помощи циклов.

// 	подсказка:
// - нужно использовать 2 цикла, вложенных друг в друга,
// 	- нужно сравнивать и менять элементы


const arr = [1, 40, -5, 10, 0];

function sortArray(array, direction = 'ascending') {
	let temp1;
	let temp2;
	switch (direction) {
		case 'ascending': //сортировка по возрастанию
			for (let i = 0; i < array.length; i++) { //количество проходов = длина массива
				for (let [j, el] of array.entries()) {
					if (array[j] > array[j + 1]) { //сравниваем соседние элементы
						temp1 = el;
						temp2 = array[j + 1];
						array[j] = temp2;
						array[j + 1] = temp1;
					}
				}
			}
			break;
		case 'descending': //сортировка по убыванию
			for (let i = 0; i < array.length; i++) { //количество проходов = длина массива
				for (let [j, el] of array.entries()) {
					if (array[j] < array[j + 1]) { //сравниваем соседние элементы
						temp1 = el;
						temp2 = array[j + 1];
						array[j] = temp2;
						array[j + 1] = temp1;
					}
				}
			}
			break;
	}
}
sortArray(arr) //сортировка по возрастанию по умолчанию
console.log(arr)
sortArray(arr, 'descending') //сортировка по убыванию с указанием направления
console.log(arr)