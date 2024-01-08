'use strict';

function mathOperation(operationButton) {
	const numOne = Number(document.querySelector('.first_number').value);
	const numTwo = Number(document.querySelector('.second_number').value);
	if (!numOne || !numTwo) {
		return;
	}	
	let operationResult;
	switch (operationButton) {
		case 'addition':
			operationResult = `${numOne + numTwo}`;
			break;
		case 'substraction':
			operationResult = `${numOne - numTwo}`;
			break;
		case 'multiply':
			operationResult = `${numOne * numTwo}`;
			break;
		case 'division':
			operationResult = `${numOne / numTwo}`;
			break;
	}
	document.querySelector('.result-value').innerText = operationResult;
	document.querySelector('.button_clear').style.display = 'block'
	document.querySelector('.first_number').value = '';
	document.querySelector('.second_number').value = '';
}

const buttons = document.querySelector('.button-container');
buttons.addEventListener('click', (Event) => mathOperation(Event.target.id));

function clearB() {
	document.querySelector('.result-value').innerText = '';
	document.querySelector('.button_clear').style.display = 'none';	
}