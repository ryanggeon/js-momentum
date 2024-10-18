const API_KEY = "803f144d004de196e2d3450df801f736";


const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");      

console.log('nice');

function onGeoOk(position) {
  console.log('nice2')
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name ;
      weather.innerText = ` ${data.weather[0].main} / ${data.main.temp} `;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
