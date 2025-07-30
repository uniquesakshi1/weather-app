// src/WeatherApp.jsx
import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "d2fb5c48255df01133f1638e01625cc5"; // <-- Yahan apni API key daalein

  const getWeather = async () => {
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🌦️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}</h2>
          <p>🌡 Temp: {weather.main.temp} °C</p>
          <p>☁ Weather: {weather.weather[0].description}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;