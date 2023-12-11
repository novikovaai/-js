'use strict';

/*
	Дополнить объект методом для получения имени:
	- компании
	- сео
	- сотрудника
*/

const company = {
	name: "ООО Агро",
	employees: [
		{
			name: "Света",
		},
	],
	ceo: {
		name: "Вася",

	},
	getCompanyName() {
		return this.name
	},
	getEmployeesName() {
		return this.employees.map(element => element.name)
	},
	getCeoName() {
		return this.ceo.name
	}
};

console.log(company.getCompanyName())
console.log(company.getEmployeesName())
console.log(company.getCeoName())