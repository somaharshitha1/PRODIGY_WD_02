// Initialize variables
let seconds = 0;
let tens = 0;
let mins = 0;

// Get HTML elements
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let lapContainer = document.querySelector('.lap-container');
let interval;

// Add event listeners
btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    resetTimer();
});

btnLap.addEventListener('click', () => {
    lapTimer();
});

// Function to start the timer
function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    } else {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        tens = 0;
        getTens.innerHTML = '00';
        if (seconds <= 9) {
            getSeconds.innerHTML = '0' + seconds;
        } else {
            getSeconds.innerHTML = seconds;
        }
    }
    if (seconds > 59) {
        mins++;
        seconds = 0;
        getSeconds.innerHTML = '00';
        if (mins <= 9) {
            getMins.innerHTML = '0' + mins;
        } else {
            getMins.innerHTML = mins;
        }
    }
}

// Function to reset the timer
function resetTimer() {
    tens = 0;
    seconds = 0;
    mins = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
    getMins.innerHTML = '00';
    lapContainer.innerHTML = '';
}

// Function to lap the timer and ensure automatic scrolling
function lapTimer() {
    const lapTime = `${getMins.innerHTML}:${getSeconds.innerHTML}:${getTens.innerHTML}`;
    const lapElement = document.createElement('p');
    lapElement.textContent = lapTime;

    // Insert the new lap at the beginning
    lapContainer.insertBefore(lapElement, lapContainer.firstChild);

    // Scroll to the top to show the latest lap
    lapContainer.scrollTop = 0;
}
