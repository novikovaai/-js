'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY'
let globalActiveHabbitId;

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
	},
	popup: {
		iconField: document.querySelector('.new-habbit__add input[name="icon"]'),
		nameField: document.querySelector('.new-habbit__add input[name="name"]'),
		targetField: document.querySelector('.new-habbit__add input[name="target"]'),
		cover: document.querySelector('.cover'),
		addHabbitForm: document.querySelector('.new-habbit__form'),
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

function resetForm(form, fields) {
	for (let field of fields) {
		form[field].value = '';
	}
}

function validateForm(form, fields) {	
	const formData = new FormData(form);	
	let res = {};	
	for (let field of fields) {		
		const fieldValue = formData.get(field);
		form[field].classList.remove('error');
		if (!fieldValue) {
			form[field].classList.add('error')
			form[field].addEventListener('click', () => formData[field].classList.remove('error'))
		};
		res[field] = fieldValue;
	}
	let isValid = true;
	for (let field of fields) {
		if (!res[field]) {
			isValid = false;
		}
	}
	if (!isValid) {
		return;
	}
	return res;
}

//render

function rerenderDays(activeHabbit) {	
	page.main.days.innerHTML = '';
	let count = 0;
	for (const day of activeHabbit.days) {
		count++;
		const element = document.createElement('div');
		element.classList.add('habbit');
		element.innerHTML = `<div class="habbit__day">День ${count}</div>
							<div class="habbit__comment">
								${day.comment}
							</div>
							<button class="habbit__delete" onclick="deleteDay(${count-1})">
								<img src="./imgs/delete.svg" alt="Иконка удалить день ${count}" name="${count}">
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
	globalActiveHabbitId = activeHabbitId;
	const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
	if (!activeHabbit) {
		return;
	};
	document.location.replace(document.location.pathname + '#' + activeHabbitId)
	rerenderMenu(activeHabbit);
	rerenderHeader(activeHabbit);
	rerenderDays(activeHabbit);
}

// work with days

function addDay(event) {
	event.preventDefault();	
	const data = validateForm(event.target, ['comment']);
	if (!data) {
		return
	}
	habbits = habbits.map(habbit => {
		if (habbit.id === globalActiveHabbitId) {
			return {
				...habbit,
				days: habbit.days.concat([{ comment: data.comment }])
			};		
		}
		return habbit;	
	})
	resetForm(event.target, ['comment'])
	rerender(globalActiveHabbitId);
	saveData();	
}

function deleteDay(toDelete) {	
	habbits = habbits.map(habbit => {
		if (habbit.id === globalActiveHabbitId) {
			habbit.days.splice(toDelete, 1)	
		}
		return habbit;
	})
	rerender(globalActiveHabbitId);
	saveData();
}

//popup

function togglePopUp() {
	const Visible = page.popup.cover.classList.contains('cover_hidden');
	if (!Visible) {
		page.popup.cover.classList.add('cover_hidden');
	} else {
		page.popup.cover.classList.remove('cover_hidden');
	}
}

function setIcon(context, icon) {
	page.popup.iconField.value = icon;
	const iconActive = document.querySelector('.new-habbit__icon.new-habbit__icon_active');
	iconActive.classList.remove('new-habbit__icon_active')
	context.classList.add('new-habbit__icon_active')
}

function addHabbit(event) {
	event.preventDefault();
	const data = validateForm(event.target, ['name', 'icon', 'target']);
	const habbitTarget = Number(data.target);	
	page.popup.targetField.classList.remove('error');
	if (isNaN(habbitTarget)) {
		page.popup.targetField.classList.add('error');
		page.popup.targetField.value = '';
		page.popup.targetField.addEventListener('click', () => page.popup.targetField.classList.remove('error'))
		return
	}
	let newId = habbits.at(-1).id + 1;
	let flag = true;
	while (flag) {
		for (let habbit of habbits) {
			if (habbit.id === newId) {
				newId++
				break
			}
			flag = false;
		}
	}
	const newHabbit = {
		id: newId,
		icon: data.icon,
		name: data.name,
		target: data.target,
		days: []
	}	
	habbits.push(newHabbit)
	rerender(newHabbit.id)
	togglePopUp()
	saveData()
}

//init 

(() => {
	loadData();
	const hashId = document.location.hash.replace('#', '');
	const urlHabbit = habbits.find(habbit => habbit.id == hashId);
	if (urlHabbit) {
		rerender(urlHabbit.id);
	} else {
		rerender(habbits[0].id);
	};
	
})();

