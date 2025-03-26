const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`)}`;

async function fetchWeather() {
    try {
        const response = await fetch(API_URL);
        const json = await response.json();
        const data = JSON.parse(json.contents); // Extract actual data

        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)} °C`;
        document.getElementById('weather-description').textContent = data.weather[0].description;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-description').textContent = 'Failed to load weather data';
    }
}
