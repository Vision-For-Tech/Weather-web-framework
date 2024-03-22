const apiKey = '3007aab689bb529fdf390186fc22e169';
const latitude = '34.02577000'; // Replace 'LATITUDE' with the actual latitude of the location
const longitude = '-118.78040000'; // Replace 'LONGITUDE' with the actual longitude of the location

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Extract weather information from the response
        const location = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        // Display the weather information
        console.log(`Location: ${location}`);
        console.log(`Temperature: ${temperature} Kelvin`); // Temperature is in Kelvin by default
        console.log(`Weather Description: ${weatherDescription}`);
    })
    .catch(error => {
        console.error('There was a problem fetching weather data:', error);
    });
