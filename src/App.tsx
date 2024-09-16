import React, { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = "c3aca1111860725967dc81b6afa18e37";
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const weatherResponseData = await weatherResponse.json();
      setCurrentWeather(weatherResponseData);
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      const forecastResponseData = await forecastResponse.json();
      setForecast(forecastResponseData);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="App container mx-auto p-4">
      <SearchBar onSearch={fetchWeatherData} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;
