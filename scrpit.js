setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand');
const minuteHand = document.querySelector('[data-minute-hand');
const secondsHand = document.querySelector('[data-seconds-hand');

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondsRatio + currentDate.getHours()) / 12
    setRotation(secondsHand, secondsRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, roatationRatio) {
    element.style.setProperty('--rotation', roatationRatio * 360)
}

setClock()