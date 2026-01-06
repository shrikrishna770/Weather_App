let city = document.getElementById("citySearch");
let btn = document.getElementById("btn");
let weatherDetails = document.getElementById("weatherDetails");

btn.addEventListener("click", function () {
  if (city.value == "") {
    weatherDetails.innerText = "Please enter a city name";
  } else {
    weatherDetails.innerHTML = "";
    fetchWeatherCoordinates(city.value);
  }
});

async function fetchWeatherCoordinates(cityName) {
  try {
    let coordinatesResponce = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
    );
    let coordinatesData = await coordinatesResponce.json();
    fetchCurrentWeather(coordinatesData.results[0]);
  } catch (err) {
    console.log("Something went wrong", err);
    weatherDetails.innerHTML = "City Not found";
  }
}

async function fetchCurrentWeather(cityDetails) {
  try {
    let weatherResponce = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${cityDetails.latitude}&longitude=${cityDetails.longitude}&current_weather=true`
    );
    let weatherData = await weatherResponce.json();
    displayWeather(cityDetails, weatherData);
  } catch (err) {
    console.log("Something went wrong", err);
    weatherDetails.innerText = "Missing weather data";
  }
}

function displayWeather(cityDetails, cityWeatherDetails) {
   weatherDetails.innerText=""

  console.log(cityDetails, cityWeatherDetails);
  let cityDisplay = document.createElement("p");
  cityDisplay.innerHTML = `<p><strong>City:</strong> ${cityDetails.name}`;
  weatherDetails.append(cityDisplay);

  let countryDisplay = document.createElement("p");
  countryDisplay.innerHTML = `<p><strong>Country:</strong> ${cityDetails.country}`;
  weatherDetails.append(countryDisplay);

  let temperatureDisplay = document.createElement("p");
  temperatureDisplay.innerHTML = `<p><strong>Temperature:</strong> ${cityWeatherDetails.current_weather.temperature} ${cityWeatherDetails.current_weather_units.temperature}`;
  weatherDetails.append(temperatureDisplay);

  let windspeedDisplay = document.createElement("p");
  windspeedDisplay.innerHTML = `<p><strong>Wind Speed:</strong> ${cityWeatherDetails.current_weather.windspeed} ${cityWeatherDetails.current_weather_units.windspeed}`;
  weatherDetails.append(windspeedDisplay);
}
