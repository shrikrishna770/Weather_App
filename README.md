# Weather App

A simple and intuitive weather application that provides real-time weather information for any city in the world.

## Features

- **City Search**: Search weather information by entering any city name
- **Real-Time Data**: Fetches current weather data using free weather APIs
- **Weather Information Displayed**:
  - City name
  - Country
  - Current temperature
  - Wind speed
- **Error Handling**: User-friendly error messages for invalid cities or network issues
- **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. Enter a city name in the search input field
2. Click the "Get Weather" button
3. View the current weather details for that city:
   - City and country information
   - Current temperature
   - Wind speed

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **APIs Used**:
  - [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) - For city coordinate lookup
  - [Open-Meteo Weather API](https://open-meteo.com/en/docs) - For current weather data
- **Async/Await**: Handles asynchronous API calls
- **Responsive Design**: Mobile-friendly interface

## Files

- `index.html` - HTML structure and UI elements
- `script.js` - Weather API integration and DOM manipulation
- `style.css` - Styling and layout

## Installation

1. Clone or download the repository
2. Open `index.html` in a web browser
3. Start searching for weather in your favorite cities!

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## API Information

This app uses the free Open-Meteo API which provides:
- No API key required
- Free to use
- No rate limiting
- Accurate weather data

## Features Explanation

### fetchWeatherCoordinates()
- Takes a city name as input
- Calls the Open-Meteo Geocoding API to get latitude and longitude coordinates
- Passes the coordinates to the weather fetch function

### fetchCurrentWeather()
- Takes city coordinates as input
- Calls the Open-Meteo Weather API to get current weather data
- Passes the data to the display function

### displayWeather()
- Dynamically creates and displays weather information on the page
- Shows city, country, temperature, and wind speed

## Error Handling

- If the city is not found, displays "City Not found" message
- If the input field is empty, prompts user to enter a city name
- Catches network errors and displays appropriate messages

## Future Enhancements

- Forecast data (5-day, weekly, monthly)
- Weather icons/conditions (sunny, rainy, cloudy, etc.)
- Temperature unit conversion (Celsius/Fahrenheit)
- Favorite cities functionality
- Geolocation support for automatic weather display
- Dark mode
- Multiple language support

---

Enjoy checking the weather!
