const buttonStart = document.querySelector('.start')
const mainContainer = document.querySelector('.main-container')
const footer = document.querySelector('footer')
const containerTriangle = document.querySelector('.container-triangle')
const instructions = document.querySelector('.instructions')
const counter = document.querySelector('.counter')
const runningCircle = document.querySelector('.running-circle')
const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnReturnHome = document.querySelector('.return-home')


let timerId
let intervalIdCounter
let intervalIdInstruction
let initialCounter = 2


buttonStart.addEventListener('click', () => {
    mainContainer.style.animationName = 'animation-display'
    animationDisplay()
})

btnReturnHome.addEventListener('click', () => {
    mainContainer.style.animationName = ''
    animationDisplay()
})


btnPlay.addEventListener('click', () => {
    btnPlay.style.display = 'none'
    btnStop.style.display = 'block'
    btnReturnHome.style.opacity = 0
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
    btnReturnHome.style.opacity = 1
    runningCircle.classList.remove('go-to')

    clearInterval(intervalIdCounter)

    clearTimeout(timerId)

    clearInterval(intervalIdInstruction)
})


function instructionGenerator() {
    instructions.textContent = 'Respira profundo'
    
    timerId = setTimeout(() => {
        instructions.textContent = 'Mantén la respiración'
    }, 4500);
    
    timerId = setTimeout(() => {
        instructions.textContent = 'Exhala lentamente'
    }, 12200);
}


function startCounter() {
    if(counter.textContent === '') {
        counter.textContent = 'R: 1'
        intervalIdCounter = setInterval(() => {
            counter.textContent = `R: ${initialCounter}`
            initialCounter++
        }, 22000)
    } else {
        intervalIdCounter = setInterval(() => {
            counter.textContent = `R: ${initialCounter}`
            initialCounter++
        }, 22000)
    }
}


function animationDisplay() {
    if(mainContainer.style.animationName === 'animation-display') {
        mainContainer.style.animationDuration = '2s'
        
        setTimeout(() => {
            mainContainer.style.display = 'none'
            footer.style.display = 'none'
            containerTriangle.style.display = 'flex'
        }, 1600);
    } else {
        mainContainer.style.display = 'block'
        footer.style.display = 'flex'
        containerTriangle.style.display = 'none'
    }
}
