const API_KEY = "1d7f971b16e10f431a55fbd76d028986";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.getElementById("city");
      const icon = document.getElementById("icon");
      const name = document.getElementById("name");
      const temperature = document.getElementById("temperature");
      city.innerText = data.name;
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].main}"/>`;
      name.innerText = data.weather[0].main;
      temperature.innerText = `${Math.floor(data.main.temp - 273.15)}°`;
    });
}

function onGeoError() {
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
