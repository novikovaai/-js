'use strict';

function mathOperation(operationButton) {
	const numOne = Number(document.querySelector('.first_number').value);
	const numTwo = Number(document.querySelector('.second_number').value);
	if (!numOne || !numTwo) {
		return;
	}
	let operationResult;
	switch (operationButton) {
		case 'add':
			operationResult = `${numOne + numTwo}`;
			break;
		case 'sub':
			operationResult = `${numOne - numTwo}`;
			break;
		case 'mul':
			operationResult = `${numOne * numTwo}`;
			break;
		case 'div':
			operationResult = `${numOne / numTwo}`;
			break;
	}
	document.querySelector('.result-value').innerText = operationResult;
	document.querySelector('.button_clear').style.display = 'block'
	document.querySelector('.first_number').value = '';
	document.querySelector('.second_number').value = '';
}

function addition() {
	mathOperation('add')
};

function substraction() {
	mathOperation('sub')
};

function multiply() {
	mathOperation('mul')
};

function division() {
	mathOperation('div')
};

function clearB() {
	document.querySelector('.result-value').innerText = '';
	document.querySelector('.button_clear').style.display = 'none';	
}