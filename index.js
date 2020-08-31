

let seconds = 00;
let tens = 00;
const secondsElm = document.getElementById("seconds");
const tensElm = document.getElementById("tens");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let interval;

startBtn.onclick = () =>{
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}
stopBtn.onclick = () =>{
  clearInterval(interval);
}
resetBtn.onclick = () =>{
  clearInterval(interval);
  seconds = "00";
  tens = "00";
  secondsElm.innerHTML = seconds;
  tensElm.innerHTML = tens;
}

startTimer = () => {
  tens++; 
  
  if(tens < 9){
    tensElm.innerHTML = "0" + tens;
  }
  
  if (tens > 9){
    tensElm.innerHTML = tens;
    
  } 
  
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    secondsElm.innerHTML = "0" + seconds;
    tens = 0;
    tensElm.innerHTML = "0" + 0;
  }
  
  if (seconds > 9){
    secondsElm.innerHTML = seconds;
  }

}