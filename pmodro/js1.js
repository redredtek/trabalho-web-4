const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer = null;
let time = 25*60;

const updateDisplay = () =>{
    let minutes = Math.floor(time/60)
    let seconds = time % 60
    display.textContent = `${minutes.toString().padStart('2', '0' )}:${seconds.toString().padStart('2', '0' )}`
}

const startTime = () => {
    if(!timer){
        timer = setInterval(() => {
            time--;
            updateDisplay();
            if(time==0){
                alert("cabo teu tempo rapaz")
                stopTimer()
            }
        }, 1000)

    }
}
const stopTimer = () => {
    clearInterval(timer)
    timer= null
}
const resetTimer = () => {
    stopTimer()
    time = 25 * 60
    updateDisplay()
}
startBtn.addEventListener('click', startTime)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)

window.onload =updateDisplay();