import React from "react";

const Forecast = ({ data }) => {
  return data.cod == "400" || data.cod == "404" ? null : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-">
      {data.list.map((item) => (
        <div key={item.dt} className="bg-white p-4 rounded shadow-md">
          <p>Date: {new Date(item.dt * 1000).toLocaleDateString()}</p>
          <p>High: {item.main.temp_max}°C</p>
          <p>Low: {item.main.temp_min}°C</p>
          <p style={{ marginBottom: "50px" }}>
            Condition: {item.weather[0].description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
