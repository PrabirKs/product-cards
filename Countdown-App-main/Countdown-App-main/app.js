let newYears = document.getElementById("DateForCountdown");
let InputString = document.getElementById("Input");
let Days = document.getElementById("days");
let Hours = document.getElementById("hours");
let Minutes = document.getElementById("min");
let Seconds = document.getElementById("sec");

function btn(){
    Countdown();
    document.getElementById("Heading").textContent = InputString.value;
    setInterval(Countdown, 1000)
}

let Countdown = () => {
    const newYearsDate = new Date(newYears.value);
    const currentDate = new Date();

    const totalseconds = Math.floor((newYearsDate - currentDate) / 1000);
    const seconds = Math.floor(totalseconds) % 60;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const hours = Math.floor(totalseconds / 3600) % 24;
    const days = Math.floor(totalseconds/ 3600 / 24);

    Days.textContent = TimeAfterTen(days);
    Hours.textContent = TimeAfterTen(hours);
    Minutes.textContent = TimeAfterTen(minutes);
    Seconds.textContent = TimeAfterTen(seconds);
}

let TimeAfterTen = (time) =>{
    if (time < 10) {
        return `0${time}`;
    }else{
        return time;
    }
}

// Countdown();