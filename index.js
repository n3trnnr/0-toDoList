const listWrapper = document.querySelector('.listWrapper')
const input = document.querySelector('.input-text')
const btn = document.querySelector('.btn')
const btnEven = document.querySelector('.even')
const btnOdd = document.querySelector('.odd')
const delfrst = document.querySelector('.delfrst')
const dellst = document.querySelector('.dellst')
const error = document.querySelector('.error')

let todos;
const setLocalStorage = () => {
    todos = listWrapper.innerHTML
    localStorage.setItem('todos', todos)
}

const createElement = () => {

    if (input.value.length === 0) {
        error.textContent = 'Введите вашу задачу!'
    } else {
        error.textContent = ''

        const itemWrapper = document.createElement('div')
        const item = document.createElement('span')
        const delBtn = document.createElement('button')

        itemWrapper.classList.add('itemWrapper')
        item.classList.add('task-el')
        delBtn.classList.add('del-btn')

        item.textContent = input.value
        delBtn.textContent = 'X'

        itemWrapper.appendChild(item)
        itemWrapper.appendChild(delBtn)
        listWrapper.appendChild(itemWrapper)
        setLocalStorage()

        input.value = ''
    }
}

const selectEven = () => {

    const arr = []

    const getEl = document.querySelectorAll('.itemWrapper')
    getEl.forEach((el) => {
        arr.push(el)
    })

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i].firstChild.classList.toggle('even')
            setLocalStorage()
        }
    }
}

const selectOdd = () => {

    const arr = []

    const getEl = document.querySelectorAll('.itemWrapper')
    getEl.forEach((el) => {
        arr.push(el)
    })

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr[i].firstChild.classList.toggle('odd')
            setLocalStorage()
        }
    }
}

const deleteFirstEl = () => {
    const frstEl = listWrapper.firstChild
    frstEl.remove()
    setLocalStorage()
}

const deleteLastEl = () => {
    const frstEl = listWrapper.lastChild
    frstEl.remove()
    setLocalStorage()
}

btn.addEventListener('click', createElement)
btnEven.addEventListener('click', selectEven)
btnOdd.addEventListener('click', selectOdd)
delfrst.addEventListener('click', deleteFirstEl)
dellst.addEventListener('click', deleteLastEl)
listWrapper.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        event.target.classList.toggle('cheched')
        listWrapper.appendChild(event.target.parentNode)
        setLocalStorage()
    } else if (event.target.tagName === 'BUTTON') {
        let delEl = event.target.parentNode
        delEl.remove()
        setLocalStorage()
    }
}, false)

if (localStorage.getItem('todos')) {
    listWrapper.innerHTML = localStorage.getItem('todos')
}