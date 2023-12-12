'use strict';
/*
Создайте объект пользователя с паролем.
С помощью функции ниже удалить пароль сделав
функцию сброса пароля
*/

function removePassword(reset) {
	if (reset) {
		this.password = undefined;
	} else {
		this.password = '1';
	}
}

const user = {
	userName: 'Вася',
	password: 'sJDHGE@sh'

}

const removeUserPassword = removePassword.bind(user, true)

removeUserPassword()

console.log(user)

console.log('--------------')
/* Сделать функию пользователя которая берет за основу userInfo и за счет замыкания создает новый объект, с которым можно работать как user1().increase(100) */

const userInfo = {
    balance: 0,
    operations: 0,
    increase(sum) {
        this.balance += sum;
        this.operations++;
        },
};

function user() {
    const userObj = {
        balance: 0,
        operations: 0,
        };
    userObj.increase = userInfo.increase
    return function () {
        return userObj
        }
}

const user1 = user();
user1().increase(100)
user1().increase(100)

console.log(userInfo.balance)

const user2 = user();
user2().increase(150)
user2().increase(150)
console.log(userInfo.balance)
console.log(user1().balance)
console.log(user2().balance)

