import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
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
        setWeatherData(data);
      } else {
        setError("City not found. Please try again.");
        setWeatherData(null);
      }
    } catch (err) {
      setError(err, "Error fetching data. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "32px",
          width: "100%",
          maxWidth: "380px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "0 0 4px 0", fontSize: "22px", color: "#1a1a1a" }}>
          Weather App
        </h1>
        <p style={{ margin: "0 0 24px 0", fontSize: "13px", color: "#888" }}>
          Enter a city to see current weather
        </p>

        {/* Search Row */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <input
            type="text"
            placeholder="City name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchWeather()}
            style={{
              flex: 1,
              padding: "10px 12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              outline: "none",
              color: "#333",
            }}
          />
          <button
            onClick={searchWeather}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>

        {/* Error */}
        {error && (
          <p
            style={{ color: "#e53e3e", fontSize: "13px", margin: "0 0 16px 0" }}
          >
            {error}
          </p>
        )}

        {/* Weather Result */}
        {weatherData && (
          <div
            style={{
              backgroundColor: "#f8fafc",
              borderRadius: "6px",
              padding: "20px",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                margin: "0 0 4px 0",
                fontSize: "18px",
                color: "#1a1a1a",
              }}
            >
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p
              style={{
                margin: "0 0 16px 0",
                fontSize: "13px",
                color: "#888",
                textTransform: "capitalize",
              }}
            >
              {weatherData.weather[0].description}
            </p>

            <p
              style={{
                margin: "0 0 20px 0",
                fontSize: "40px",
                fontWeight: "600",
                color: "#1a1a1a",
              }}
            >
              {Math.round(weatherData.main.temp)}°C
            </p>

            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "16px" }}>
              {[
                {
                  label: "Feels Like",
                  value: `${Math.round(weatherData.main.feels_like)}°C`,
                },
                { label: "Humidity", value: `${weatherData.main.humidity}%` },
                { label: "Wind Speed", value: `${weatherData.wind.speed} m/s` },
                { label: "Condition", value: weatherData.weather[0].main },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    fontSize: "14px",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <span style={{ color: "#666" }}>{label}</span>
                  <span style={{ color: "#1a1a1a", fontWeight: "500" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Export the component so it can be used in other files
export default Weather;
