//jshint esversion:6

const secondHand = document.querySelectorAll(".second-hand");
const minHand = document.querySelectorAll(".min-hand");
const hourHand = document.querySelectorAll(".hour-hand");


function setDate () {
  const currentTime = new Date();

 for(i=0; i<secondHand.length; i++) {
  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand[i].style.transform = `rotate(${secondsDegrees}deg)`;

  for(j=0; j<minHand.length; j++) {
    const mins = currentTime.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minHand[j].style.transform = `rotate(${minsDegrees}deg)`;

    for(k=0; k<hourHand.length; k++) {
      const hours = currentTime.getHours();
      const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
      hourHand[k].style.transform = `rotate(${hoursDegrees}deg)`;
    }
  }
 }
}

setInterval (setDate, 1000);

setDate();


