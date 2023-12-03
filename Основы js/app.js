// Дан список задач

// const tasks = ['Задача 1'];


// Сделать функции:

//     Добавление задачи в конец
//     Удаление задачи по названию
//     Перенос задачи в начало списка по названию

// !Всегда меняем исходный массив

function addTask(array, task) {
    array.push(task)
    return array
}

function delTask(array, task) {
    let index = array.indexOf(task)
    index > -1 ? array.splice(index, 1) : array
    return array
}

function makeFirst(array, task) {
    let index = array.indexOf(task)
    if (index > -1) {
        let task2
        task2 = array.splice(index, 1)
        array.unshift(task2[0])
    }   
    return array
}

const tasks = ['Задача 1']

addTask(tasks, 'task1')
addTask(tasks, 'task2')
addTask(tasks, 'task3')
console.log(tasks)
console.log(delTask(tasks, 'task5'))
console.log(makeFirst(tasks, 'task1'))


// Дан произвольный url вида - https://purpleschool.ru/course/javascript
// Нужно сделать функцию, которая выводит в консоль:

// Протокол(https)
//     Доменное имя(purpleschool.ru)
//     Путь внутри сайта(/course/javascript)

function getInfo(url) {
    let urlList = url.split('/')    
    // Протокол
    switch (urlList[0]) {
        case 'https:':
            console.log('Протокол https')
            break
        case 'http:':
            console.log('Протокол http')
            break
        default:
            console.log('Ошибка в протоколе')        
    }
    // Доменное имя
    let dom = urlList[2].split('')
    console.log(dom.includes('.') ? urlList[2] : 'Ошибка в доменном имени')   
    // Путь внутри сайта
    let path = urlList.slice(3)
    console.log('/' + path.join('/'))
}

function getPath(url) {
    let [protocol, _, host, ...path] = url.split('/')
    if (protocol === 'https:' || protocol === 'http:') {
        console.log(`Протокол ${protocol.slice(0, -1)}`)
    } else { console.log('Ошибка в протоколе') }
    console.log(host.split('').includes('.') ? host : 'Ошибка в доменном имени')
    console.log('/' + path.join('/'))
}

const url = 'https://purpleschool.ru/course/javascript'
const url2 = 'purpleschool.ru/course/javascript'

getPath(url)
getPath(url2)