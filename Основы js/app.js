'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').classList.add('notification_active');

    const textStr = JSON.stringify({text: input});
    localStorage.setItem('text', textStr)

};

function changedInput(e) {
    if (e.code === 'Enter') {
        submitForm()
    }
};

// console.log(document.querySelectorAll('div.one')[0].innerText)
// console.log(document.querySelectorAll('div.one')[1].innerText)
// console.log(document.querySelector('div#two').innerText)
// console.log(document.querySelector('div span[user-id="4"]').innerText)

// const newElement = document.createElement('div')
// const panelText = 'Панель'
// const panelClass = 'button'
// newElement.setAttribute('user-id', 1)
// newElement.classList.add('panel')
// newElement.innerText = 'Кнопка'
// newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`
// document.querySelector('.test').appendChild(newElement)

// localStorage.setItem('token', 'dsfjhasd;gjha;')

// localStorage.key
// localStorage.getItem

