//jshint esversion:6

const secondHand = document.querySelectorAll(".second-hand");
const minHand = document.querySelectorAll(".min-hand");
const hourHand = document.querySelectorAll(".hour-hand");


function setDateNY () {
  const currentTime = new Date();
  
  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand[0].style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = currentTime.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minHand[0].style.transform = `rotate(${minsDegrees}deg)`;

  const hours = (currentTime.getHours())-5;
  const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hourHand[0].style.transform = `rotate(${hoursDegrees}deg)`;
  document.querySelectorAll("h2.ny")[0].innerHTML = (`${hours} : ${mins} : ${seconds}`);
}

setInterval (setDateNY, 1000);
setDateNY();

function setDatePrg () {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand[1].style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = currentTime.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minHand[1].style.transform = `rotate(${minsDegrees}deg)`;

  const hours = currentTime.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hourHand[1].style.transform = `rotate(${hoursDegrees}deg)`;
  document.querySelectorAll("h2.prg")[0].innerHTML = (`${hours} : ${mins} : ${seconds}`);
}

setInterval (setDatePrg, 1000);
setDatePrg();


function setDateTok () {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand[2].style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = currentTime.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minHand[2].style.transform = `rotate(${minsDegrees}deg)`;

  const hours = (currentTime.getHours()) + 8;
  const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hourHand[2].style.transform = `rotate(${hoursDegrees}deg)`;
  document.querySelectorAll("h2.tok")[0].innerHTML = (`${hours} : ${mins} : ${seconds}`);
}

setInterval (setDateTok, 1000);
setDateTok();


