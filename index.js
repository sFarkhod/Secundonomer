let startBtn = document.getElementById('btn-start');
let endBtn = document.getElementById('btn-end');
let resetBtn = document.getElementById('btn-reset');



let secondOut = document.getElementById('second');
let millisecondOut = document.getElementById('msecond');

let second = 00;
let millisecond = 00;

let Interval;

// -------------------------------------------- //
startBtn.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(secundOnamer, 10);
});


endBtn.addEventListener('click', () => {
    clearInterval(Interval);
})

resetBtn.addEventListener('click', () => {
    clearInterval(Interval);
    millisecond = "00";
    second = "00";
    secondOut.innerHTML = second;
    millisecondOut.innerHTML = millisecond;
})



function secundOnamer(){
    millisecond++;
    if(millisecond <= 9){
        millisecondOut.innerHTML = "0" + millisecond;
    }

    if(millisecond > 9){
        millisecondOut.innerHTML = millisecond;
    }

    if(millisecond > 99){
        second++;
        secondOut.innerHTML = "0" + second;
        millisecond = 0;
        millisecondOut.innerHTML = "0" + millisecond;
    }

    if(second > 9){
        secondOut.innerHTML = second;
    }
}
