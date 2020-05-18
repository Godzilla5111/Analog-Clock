const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // console.log('hi');
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsToDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesToDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;

  let hours = now.getHours();
  if(hours>12){
      var hoursToDegrees = (((hours -12) / 12) * 360) + ((minutes/60)*30) + 90;
  }

  else{
      var hoursToDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  }
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;

}

setInterval(setDate, 1000);
