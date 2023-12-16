'use strict';

// document.querySelector('.button').addEventListener('click', function () { 
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input  
//     document.querySelector('.input').value = '' 
//  })

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // document.querySelector('.notification').style.display = 'block';
    document.querySelector('.notification').classList.add('notification_active');
};

function changedInput(e) {
    if (e.code === 'Enter') {
        submitForm()
    }
}


// document.querySelector('.input').addEventListener('keydown', (e) => {
//     if (e.code === 'Enter') {
//         submitForm()
//     }
// })

const panelText = document.querySelector('.panel').innerText;



console.log(panelText)