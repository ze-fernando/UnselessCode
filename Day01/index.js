let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let hourValue = 1;
let minValue = 1;
let secValue = 1;

let play = document.getElementById("play");
let full = document.getElementById("full-screen");

let intervalId;
let playing = false;


const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("change", () => {
        input.value = input.value.trim(); // Remove espaços em branco

        if (!input.value || isNaN(input.value)) {
            input.value = "00";
        } else if (input.value > 59) {
            input.value = "59";
        };
        secValue = Number.parseInt(sec.value);
        minValue = Number.parseInt(min.value);
        hourValue = Number.parseInt(hour.value);
    });
});


function playCounter() {
    if (playing) {
        play.innerHTML = "play_arrow";
        playing = false;

        clearInterval(intervalId);
    } else {
        play.innerHTML = "pause";
        playing = true;

        intervalId = setInterval(() => {
            secValue--;
            if (secValue <= 0) {
                if (minValue >= 1) {
                    minValue--;
                    secValue = 59;
                } else if (hourValue >= 1) {
                    hourValue--;
                    minValue = 59;
                    secValue = 59;
                }
                else {
                    clearInterval(intervalId);
                    play.innerHTML = "play_arrow";
                    playing = false;
                }
            }
            sec.value = secValue.toString().padStart(2, "0");
            min.value = minValue.toString().padStart(2, "0");
            hour.value = hourValue.toString().padStart(2, "0");
        }, 1000)
    }
}

function stopCounter() {

    addToHistory(hourValue, minValue, secValue);
    clearInterval(intervalId)
}

function fullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        full.innerHTML = "fullscreen";
    } else {
        full.innerHTML = "fullscreen_exit";
        document.documentElement.requestFullscreen();
    }
}

function resetCounter() {
    hour.value = '01';
    min.value = '01';
    sec.value = '01';

    hourValue = 1;
    minValue = 1;
    secValue = 1;

    play.innerHTML = "play_arrow";
    playing = false;

    clearInterval(intervalId);
}