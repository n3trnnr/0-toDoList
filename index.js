
const listWrapper = document.querySelector('.listWrapper')
const input = document.querySelector('.input-text')
const btn = document.querySelector('.btn')
const btnEven = document.querySelector('.even')
const btnOdd = document.querySelector('.odd')
const delfrst = document.querySelector('.delfrst')
const dellst = document.querySelector('.dellst')
const error = document.querySelector('.error')
// const formWrapper = document.querySelector('.form-wrapper')

// const getData = () => {
//     const data = []
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i)
//         const value = localStorage.getItem(key)

//         const el = {
//             id: key,
//             text: value
//         }

//         data.push(el)
//     }
//     return data
// }

const addEvenStyle = () => {

    const arr = []

    const getEl = document.querySelectorAll('.itemWrapper')
    getEl.forEach((el) => {
        arr.push(el)
    })
    console.log('addStyle arr', arr);

    for (let i = 0; i < arr.length; i++) {
        // console.log('i', i);

        if (i % 2 === 0) {
            arr[i].firstChild.classList.toggle('even')
        }
    }
}

const addOddStyle = () => {

    const arr = []

    const getEl = document.querySelectorAll('.itemWrapper')
    getEl.forEach((el) => {
        arr.push(el)
    })
    // console.log('addStyle arr', arr);

    for (let i = 0; i < arr.length; i++) {
        console.log('i', i);

        if (i % 2 !== 0) {
            arr[i].firstChild.classList.toggle('odd')
        }
    }
}

btnEven.addEventListener('click', addEvenStyle)
btnOdd.addEventListener('click', addOddStyle)

const createElement = () => {

    if (input.value.length === 0) {
        error.textContent = 'please text your task'
    } else {
        error.textContent = ''

        const arr = []

        // localStorage.setItem(id, text)

        const id = (Math.round(Math.random() * 100))

        const itemWrapper = document.createElement('div')
        const item = document.createElement('span')
        const delBtn = document.createElement('button')

        itemWrapper.classList.add('itemWrapper')
        item.classList.add('task-el')
        delBtn.classList.add('del-btn')

        item.textContent = input.value
        item.id = id
        delBtn.textContent = 'X'
        delBtn.id = id

        itemWrapper.appendChild(item)
        itemWrapper.appendChild(delBtn)
        listWrapper.appendChild(itemWrapper)

        input.value = ''

        const getEl = document.querySelectorAll('.itemWrapper')
        getEl.forEach((el) => {
            arr.push(el)
        })
        // console.log('arr', arr);

        for (let i = 0; i < arr.length; i++) {

            console.log('asd', arr[i].firstChild.className);
            // if (arr[i].firstChild.className === 'cheched') {
            //     const el = arr.splice(i, 1)
            //     console.log('splice', el);
            // }
        }
    }
}

btn.addEventListener('click', createElement)

listWrapper.addEventListener('click', (event) => {
    // console.log(event.target.tagName);
    if (event.target.tagName === 'SPAN') {
        event.target.classList.toggle('cheched')
        listWrapper.appendChild(event.target.parentNode)
    } else if (event.target.tagName === 'BUTTON') {
        let delEl = event.target.parentNode
        delEl.remove()
        // console.log('delEl', delEl);
    }
}, false)



//https://habr.com/ru/articles/496348/ - описание работы с localStorage