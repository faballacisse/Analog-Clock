// 1. Use Javascript to move clock hands
const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");
//Will contain the degrees we want to turn our arm
let hourPosition;
let minutePosition;
let secondPosition;

function runTheClock() {
  // 3. Getting the current hour, minute, second with Date Object()
  let date = new Date();
  //console.log(date);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //console.log(hours + "hours " + minutes + "minutes " + seconds + "seconds");

  // 4. Showing current time using fancy maths (convert hour, min, sec to their equiv in degrees)
  hourPosition = (hours * 360 + minutePosition) / 12;
  minutePosition = (minutes * 360 + secondPosition) / 60;
  secondPosition = (seconds * 360) / 60;

  // 2. Use CSS to move clock hands
  hourHand.style.transform = "rotate(" + hourPosition + "deg)";
  minuteHand.style.transform = " rotate(" + minutePosition + "deg)";
  secondHand.style.transform = " rotate(" + secondPosition + "deg)";
}

// 5. Make the clock move forward second by second
let interval = setInterval(runTheClock, 1000);
