import React from "react";

const CurrentWeather = ({ data }) => {
  return data.cod == "400" ? (
    <>
      <p>Nothing to Geocode</p>
      <p>Please Enter City Name</p>
    </>
  ) : data.cod == "404" ? (
    <p>City not found</p>
  ) : (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
