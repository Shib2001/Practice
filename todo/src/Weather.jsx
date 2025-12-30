// Import useState hook from React to manage state
import { useState } from "react";

function Weather() {
  // State to store the city name entered by user
  const [city, setCity] = useState("");

  // State to store the weather data from API
  const [weatherData, setWeatherData] = useState(null);

  // State to store any error message
  const [error, setError] = useState("");

  // API key for OpenWeatherMap
  const api_key = "01163213e795e895ace9d55c2a76c5d0";

  // Function to fetch weather data when search button is clicked
  const searchWeather = async () => {
    // Check if city is empty
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    // Clear previous error
    setError("");

    // Build the API URL with city name and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
      // Make the API request
      const response = await fetch(url);

      // Parse the JSON response
      const data = await response.json();

      // Check if city was found (API returns cod 200 for success)
      if (data.cod === 200) {
        // Store the weather data in state
        setWeatherData(data);
      } else {
        // City not found - show error
        setError("City not found. Please try again.");
        setWeatherData(null);
      }
    } catch (err) {
      // Handle network errors
      setError("Error fetching data. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>

      {/* Search Input - user types city name here */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {/* Search Button - calls searchWeather function when clicked */}
      <button onClick={searchWeather}>Search</button>

      {/* Show error message if there is one */}
      {error && <p>{error}</p>}

      {/* Show weather data only if we have it */}
      {weatherData && (
        <div>
          <h2>
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>
            <strong>Temperature:</strong> {weatherData.main.temp}°C
          </p>
          <p>
            <strong>Feels Like:</strong> {weatherData.main.feels_like}°C
          </p>
          <p>
            <strong>Weather:</strong> {weatherData.weather[0].main} -{" "}
            {weatherData.weather[0].description}
          </p>
          <p>
            <strong>Humidity:</strong> {weatherData.main.humidity}%
          </p>
          <p>
            <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}

// Export the component so it can be used in other files
export default Weather;
