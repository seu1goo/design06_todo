const colorBg = document.getElementById("right-area");
const dates = document.getElementById("date");
const clock = document.getElementById("clock");

function getDate() {
  const todayDate = new Date();
  const year = String(todayDate.getFullYear());
  const month = String(todayDate.getMonth() + 1);
  const monthColor = todayDate.getMonth() + 1;
  const date = String(todayDate.getDate());
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const week = day[todayDate.getDay()];

  dates.innerText = `${year}. ${month}. ${date}. ${week}.`;

  if (3 <= monthColor && monthColor < 6) {
    colorBg.style.backgroundColor = "#86af49";
  } else if (6 <= monthColor && monthColor < 9) {
    colorBg.style.backgroundColor = "#007591";
  } else if (9 <= monthColor && monthColor < 12) {
    colorBg.style.backgroundColor = "#fe7d31";
  } else {
    colorBg.style.backgroundColor = "#ce2b37";
  }
}

function getClock() {
  const todayClock = new Date();
  const hours = String(todayClock.getHours()).padStart(2, "0");
  const minutes = String(todayClock.getMinutes()).padStart(2, "0");
  const seconds = String(todayClock.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getDate();
getClock();
setInterval(getClock, 1000);
