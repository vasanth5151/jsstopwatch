const timedisplay = document.querySelector('.container .Timedisplay')
const startbtn =  document.querySelector('#startbtn')
const stopbtn =  document.querySelector('#stopbtn')
const restbtn =  document.querySelector('#resetbtn')

let seconds = 0;
let interval = null;

startbtn.addEventListener("click",start);
stopbtn.addEventListener("click",stop);

restbtn.addEventListener("click",reset);


function timer(){
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    
    if(secs < 10) secs = '0'+ secs;
    if(mins < 10) mins = '0'+ mins;
    if(hrs < 10)  hrs = '0' +hrs;    

    timedisplay.innerText =`${hrs}:${mins}:${secs}`;
};


function start() {
    if(interval) {
        return
    }
    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
    interval = null;
}
function reset(){
    stop();
    seconds =0
    timedisplay.innerText = '00:00:00';
}










