function crypto(password) {
	let passList = password.split(''); //делаем список
	const passListHalf = passList.splice(passList.length / 2); // делим пароль пополам    
	passList.unshift(passList.pop()); // переставляем последний символ в начало в одной половине
	passListHalf.unshift(passListHalf.pop()); // и в другой
	passList = passListHalf.concat(passList); // соединяем половины в обратном порядке
	passList.reverse(); //переворачиваем пароль
	return passList.join(''); //возвращаем то, что получилось, в виде строки
}

function check(cryptedPassword) {
	let passList = cryptedPassword.split(''); //делаем список
	const passLen = passList.length; //считаем длину пароля
	passList.reverse(); //переворачиваем пароль
	const passListHalf = passLen % 2 == 0 ? passList.splice(passLen / 2) : passList.splice(passLen / 2 + 1); //делим пароль пополам; если длина нечетная, то компенсируем это, прибавляя 1 символ
	passList.push(passList.shift()); //переставляем первый символ в конец в одной половине
	passListHalf.push(passListHalf.shift()); //и в другой
	passList = passListHalf.concat(passList); //соединяем половины в обратном порядке    
	return passCheck = passList.join('') === pass; //делаем проверку, совпадает ли получившееся с исходным паролем  
}

const pass = 'password123'

const doPass = crypto(pass)
const unDoPass = check(doPass)
const wrong = check('1234')
console.log(doPass)
console.log(unDoPass)
console.log(wrong)