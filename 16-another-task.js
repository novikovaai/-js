/* Написать объект ToDoList, который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1} и имеет методы:
 - Добавить задачу
 - Удалить задачу по id
 - Обновить имя или приоритет по id
 - Отсортировать задачи по приоритету
 */

'use strict'

let ToDoList = {
	tasks: [{ 'title': 'Помыть посуду', id: 1, priority: 1 }],
	addTask: function (task, priority = 1, id = this.tasks.length + 1) {
		let idExists = this.tasks.findIndex(element => element.id === id) !== -1;
		if (this.validation(id, priority) && !idExists) {
			this.tasks.push({
				'title': task,
				id,
				priority
			})
		} else {
			console.log(`Произошла ошибка при добавлении задачи: ${idExists ? 'id уже существует' : 'id и priority должны быть числами'}`)
		}
		return this.tasks
	},
	delTask: function (id) {
		let idInTasks = this.tasks.findIndex(element => element.id === id);
		if (this.validation(id) && idInTasks !== -1) {
			this.tasks.splice(idInTasks)
		} else {
			console.log(`Произошла ошибка при удалении задачи: ${idInTasks === -1 ? 'id не найден' : 'id должен быть числом'}`)
		}
		return this.tasks
	},
	alterTask: function (id, newPriority = undefined, newTitle = undefined) {
		let idInTasks = this.tasks.findIndex(element => element.id === id);
		if (this.validation(id, newPriority) && idInTasks !== -1) {
			if (newTitle) {
				this.tasks[idInTasks]['title'] = newTitle;
			}
			if (newPriority) {
				this.tasks[idInTasks].priority = newPriority;
			}
		} else {
			console.log(`Произошла ошибка при изменении задачи: ${idInTasks === -1 ? 'id не найден' : 'id и priority должны быть числами'}`)
		}
		return this.tasks
	},
	sortTasksByPriority: function () {
		this.tasks.sort((a, b) => b.priority - a.priority)
		return this.tasks
	},
	validation: function (id, priority = 1) {
		if (priority === undefined) {
			priority = 1;
		}
		return priority ? id > 0 && priority > 0 : id > 0;
	}
}

const newTask = {
	tasks: [{ id: 1, 'title': 'Помыть посуду', description: 'Описание', priority: 1 }],
}

newTask.addTask = ToDoList.addTask
newTask.delTask = ToDoList.delTask
newTask.alterTask = ToDoList.alterTask
newTask.sortTasksByPriority = ToDoList.sortTasksByPriority
newTask.validation = ToDoList.validation

newTask.addTask('Подмести пол', 1, 2);
newTask.addTask('Выгулять собаку', 3, 3);
newTask.addTask('Помыть окна');
newTask.addTask('Существующий id', 1, 2);
newTask.addTask('Id не число', 1, 'Не число');
newTask.addTask('Приоритет не число', 'Не число');
console.log(newTask.tasks);
newTask.delTask(4);
newTask.delTask(10);
console.log(newTask.tasks);
newTask.alterTask(1, 4);
newTask.alterTask(10, 4, 'Неправильный id');
newTask.alterTask(1, 'Не число', 'Приоритет не число');
console.log(newTask.tasks);
newTask.sortTasksByPriority()
console.log(newTask.tasks);
