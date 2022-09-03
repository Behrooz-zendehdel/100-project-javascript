const timer = document.querySelector(".timer");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  let day_night = "AM";
  if (hours > 12) {
    day_night = "PM";
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 12) {
    hours = "0" + hours;
  }
  if (second < 10) {
    second = "0" + second;
  }
  timer.textContent = hours + ":" + minutes + ":" + second + ":" + day_night;
}, 1000);
