// Функція для обчислення середнього значення
const firstinput = document.getElementById('firstinput')
const secondinput = document.getElementById('secondinput')

function averageValue() {
    const firstValue = firstinput.value
    const secondValue = secondinput.value
    return (Number(firstValue) + Number(secondValue)) / 2
}
const result = document.getElementById('result')
const submit = document.getElementById('submit')
submit.addEventListener('click', () => {
    const average = averageValue()
    result.textContent = average
})

// Функція для перевірки, чи є число простим
const input = document.getElementById('number')
let resultnumber = "true"
function PrimeNumber() {
    const number = input.value
    if (number % 2 === 0) {
        resultnumber = true
    } else {    
        resultnumber = false
    }
}
const numberresult = document.getElementById('numberresult')
const submitbutton = document.getElementById('submitnumber')
submitbutton.addEventListener('click', () => {
    PrimeNumber()
    numberresult.textContent = resultnumber
})
// Функція для створення масиву парних чисел

const array = document.getElementById('array')
const generatearray = document.getElementById('generatearray')

function generateArray () {
    let array = []
    for (let i = 0; i < 10; i++) {
        array.push(i * 2)
    }
    return array
}
generatearray.addEventListener('click', () => {
    const resultarray = generateArray()
    array.textContent = resultarray
})

// Функція для отримання унікальних значень
const arrayinput = document.getElementById('arrayinput')
const getunique = document.getElementById('getunique')
const uniquearray = document.getElementById('uniquearray')

function getUniqueValues() {    
    const array = arrayinput.value.split(',')

    let firstValue = array[0]
    let secondValue = array[1]
    let thirdValue = array[2]
    let fourthValue = array[3]
    let fifthValue = array[4]

    if (firstValue === secondValue || firstValue === thirdValue || firstValue === fourthValue || firstValue === fifthValue) {
        firstValue = ''
    }
    if (secondValue === thirdValue || secondValue === fourthValue || secondValue === fifthValue) {
        secondValue = ''
    }
    if (thirdValue === fourthValue || thirdValue === fifthValue) {
        thirdValue = ''
    }
    if (fourthValue === fifthValue) {
        fourthValue = ''
    }
    return [firstValue, secondValue, thirdValue, fourthValue, fifthValue]
}

getunique.addEventListener('click', () => {
    const result = getUniqueValues()
    uniquearray.textContent = result
})
// Функція для перетворення рядка на масив слів
const wordinput = document.getElementById('word')
const getletters = document.getElementById('getletters')
const lettersresult = document.getElementById('letters')
function getLetters() {
    const word = wordinput.value
    const letters = word.split('')
    return letters
}
getletters.addEventListener('click', () => {
    const result = getLetters()
    lettersresult.textContent = result
})