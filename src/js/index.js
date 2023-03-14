const buttonStart = document.querySelector('.start')
const mainContainer = document.querySelector('.main-container')
const footer = document.querySelector('footer')
const containerTriangle = document.querySelector('.container-triangle')
const instructions = document.querySelector('.instructions')
const counter = document.querySelector('.counter')
const runningCircle = document.querySelector('.running-circle')
const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')


let timerId
let intervalIdCounter
let intervalIdInstruction
let initialCounter = 2


buttonStart.addEventListener('click', () => {
    animationDisplay()
    btnStop.style.display = 'none'
})


btnPlay.addEventListener('click', () => {
    btnPlay.style.display = 'none'
    btnStop.style.display = 'block'
    runningCircle.classList.add('go-to')

    startCounter()
    
    instructionGenerator()

    intervalIdInstruction = setInterval(() => {
        instructionGenerator()
    }, 22000)
})


btnStop.addEventListener('click', () => {
    btnPlay.style.display = 'block'
    btnStop.style.display = 'none'
    runningCircle.classList.remove('go-to')

    clearInterval(intervalIdCounter)

    clearTimeout(timerId)

    clearInterval(intervalIdInstruction)
})


function instructionGenerator() {
    instructions.textContent = 'Respira profundo'
    
    timerId = setTimeout(() => {
        instructions.textContent = 'Mantén la respiración'
    }, 5600);
    
    timerId = setTimeout(() => {
        instructions.textContent = 'Exhala lentamente'
    }, 13000);
}


function startCounter() {
    if(counter.textContent === '') {
        counter.textContent = 1
        intervalIdCounter = setInterval(() => {
            counter.textContent = initialCounter
            initialCounter++
        }, 22000)
    } else {
        intervalIdCounter = setInterval(() => {
            counter.textContent = initialCounter
            initialCounter++
        }, 22000)
    }
}


function animationDisplay() {
    mainContainer.style.animationName = 'delete'
    mainContainer.style.animationDuration = '2s'

    setTimeout(() => {
        mainContainer.innerHTML = ''
        footer.innerHTML = ''
        containerTriangle.style.display = 'flex'
    }, 1600);
}
