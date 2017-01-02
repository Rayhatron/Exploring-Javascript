const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const hand = document.querySelector('.hand');

function setDate(){
    
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = ((seconds / 60) * 360) + 90;
    const minDeg = ((minutes / 60) * 360) + 90;
    const hourDeg = ((hours / 12) * 360) + 90;

    if(secondDeg === 90 ){
        secondHand.style.transition = "none";
        minHand.style.transition = "none";
        hourHand.style.transition = "none";
    }

    if(secondDeg !== 90){
        secondHand.style.transition = "all 0.05s";
        minHand.style.transition = "all 0.05s";
        hourHand.style.transition = "all 0.05s";
    }

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    
}




setInterval(setDate, 1000);