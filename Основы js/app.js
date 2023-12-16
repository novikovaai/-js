'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').classList.add('notification_active');
};

function changedInput(e) {
    if (e.code === 'Enter') {
        submitForm()
    }
};

console.log(document.querySelectorAll('div.one')[0].innerText)
console.log(document.querySelectorAll('div.one')[1].innerText)
console.log(document.querySelector('div#two').innerText)
console.log(document.querySelector('div span[user-id="4"]').innerText)


