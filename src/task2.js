
const refs = {
btnCount: document.querySelector('[data-startcount]'),
clock: document.querySelector('.clockface'),
};

refs.btnCount.addEventListener('click', () => {start();});


const countDownDate = new Date().getTime();
console.log(countDownDate)


let isActive = false;
function start() {
    if (isActive) {
    return;
    }
    const startTime = Date.now();
    isActive = true;
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        const timer= convertMs(deltaTime);
        updateClockface(timer);
    },1000);
};


//конечное время - текущее

function updateClockface ({ days, hours, minutes, seconds }) {
    refs.clock.textContent = `${days}: ${hours}: ${minutes}: ${seconds}`;
}

console.log(updateClockface);





function pad(value) {
    return String(value).padStart(3,'0')};

function paddays(value) {
        return String(value).padStart(2,'0')};





function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = paddays(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = paddays(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = paddays(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}