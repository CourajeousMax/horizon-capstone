import { React, useEffect, useState } from "react";

const WeatherApi = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async() => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/gfs?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FNew_York`
        );
        if (response.ok) {
          const jsonData = await response.json();
          console.log(jsonData);
          setCurrentWeather(jsonData.current_weather);
        } else {
          console.log("Request failed:", response.status);
        }
      } catch (error) {
        console.log("error");
      }
    };
    fetchWeather();
  }, []);
  return (
    <div>
      <div>
        <h3>Current Time: {new Date(currentWeather.time).toLocaleTimeString()} </h3>
        <h3>Current Temperature: {currentWeather.temperature}</h3>
        <h3>Current Windspeed: {currentWeather.windspeed}</h3>
      </div>
    </div>
  );
};
export default WeatherApi;
