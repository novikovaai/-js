'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY'

//page

const page = {
	menu: document.querySelector('.menu__list'),
	header: {
		h1: document.querySelector('.h1'),
		progressPercent: document.querySelector('.progress__percent'),
		progressCoverBar: document.querySelector('.progress__cover-bar'),
	},
	main: {
		nextDay: document.querySelector('.habbit__day'), 
		days: document.querySelector('.days'), 
	}
}

// utils

function loadData() {
	const habbitString = localStorage.getItem(HABBIT_KEY)
	const habbitArray = JSON.parse(habbitString);
	if (Array.isArray(habbitArray)) {
		habbits = habbitArray
	}
}

function saveData() {
	localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits))
}

//render

function rerenderDays(activeHabbit) {	
	page.main.days.innerHTML = '';
	let count = 0;
	for (const day of activeHabbit.days) {
		count++;
		console.log(count)
		const element = document.createElement('div');
		element.classList.add('habbit');
		element.innerHTML = `<div class="habbit__day">День ${count}</div>
							<div class="habbit__comment">
								${day.comment}
							</div>
							<button class="habbit__delete">
								<img src="./imgs/delete.svg" alt="Иконка удалить день ${count}">
							</button>`			
		page.main.days.appendChild(element)	
	}
	page.main.nextDay.innerText = `День ${activeHabbit.days.length + 1}`;
}



function rerenderHeader(activeHabbit){
	page.header.h1.innerText = activeHabbit.name;
	const progress = activeHabbit.days.length / activeHabbit.target > 1
	? 100
	: activeHabbit.days.length / activeHabbit.target * 100
	page.header.progressPercent.innerText = `${progress.toFixed(0)}%`;
	page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)

}

function rerenderMenu(activeHabbit) {
	for (const habbit of habbits) {
		const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
		if (!existed) {
			//создание
			const element = document.createElement('button');
			element.setAttribute('menu-habbit-id', habbit.id);
			element.classList.add('menu__item')
			element.addEventListener('click', () => rerender(habbit.id))
			element.innerHTML = `<img src="./imgs/${habbit.icon}.svg" alt="${habbit.name}">`
		
			if (activeHabbit.id === habbit.id) {
				element.classList.add('menu__item_active')
			}
			page.menu.appendChild(element)
			continue;
		}
		if (activeHabbit.id === habbit.id) {
			existed.classList.add('menu__item_active')
		} else {
			existed.classList.remove('menu__item_active')
		}
	}
}

function rerender(activeHabbitId) {
	const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
	if (!activeHabbit) {
		return;
	};
	rerenderMenu(activeHabbit);
	rerenderHeader(activeHabbit);
	rerenderDays(activeHabbit);
}

//init 

(() => {
	loadData();
})();
(() => {
	rerender(habbits[0].id);
})();

