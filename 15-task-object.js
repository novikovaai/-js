/* Написать объект ToDoList, который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1} и имеет методы:
 - Добавить задачу
 - Удалить задачу по id
 - Обновить имя или приоритет по id
 - Отсортировать задачи по приоритету
 */

'use strict'

let ToDoList = {
	tasks: [{ 'title': 'Помыть посуду', id: 1, priority: 1 }],
	addTask: function (task) {
		this.tasks.push(task)
		return this.tasks
	},
	delTask: function (id) {
		this.tasks.splice(this.tasks.findIndex(element => element.id === id))
		return this.tasks
	},
	alterTask: function (id, newTitle = undefined, newPriority = undefined) {
		if (newTitle) {
			this.tasks[this.tasks.findIndex(element => element.id === id)]['title'] = newTitle;
		}
		if (newPriority) {
			this.tasks[this.tasks.findIndex(element => element.id === id)].priority = newPriority;
		}
		return this.tasks
	},
	sortTasksByPriority: function () {
		this.tasks.sort((a, b) => b.priority - a.priority)
		return this.tasks
	},
}

ToDoList.addTask({ 'title': 'Подмести пол', id: 2, priority: 1 });
ToDoList.addTask({ 'title': 'Выгулять собаку', id: 3, priority: 3 });
ToDoList.addTask({ 'title': 'Помыть окна', id: 4, priority: 1 });
console.log(ToDoList.tasks);
ToDoList.delTask(4);
console.log(ToDoList.tasks);
ToDoList.alterTask(1, '', 4);
console.log(ToDoList.tasks);
ToDoList.sortTasksByPriority()
console.log(ToDoList.tasks);
