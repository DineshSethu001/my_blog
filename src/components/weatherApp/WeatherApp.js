import React, { useState } from "react";
import search_icon from "../weatherApp/weatherAssets/search.png";
import clear_icon from "../weatherApp/weatherAssets/clear.png";
import cloud_icon from "../weatherApp/weatherAssets/cloud.png";
import drizzle_icon from "../weatherApp/weatherAssets/drizzle.png";
import humidity_icon from "../weatherApp/weatherAssets/humidity.png";
import rain_icon from "../weatherApp/weatherAssets/rain.png";
import wind_icon from "../weatherApp/weatherAssets/wind.png";
import snow_icon from "../weatherApp/weatherAssets/snow.png";
import "../weatherApp/weatherApp.css";

const WeatherApp = () => {
  let api_key = "8e91f0e6be56fe879263e6006147aebd";
  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=imperial`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/hr";
    temperature[0].innerHTML = data.main.temp + `<span>\u00B0</span>` + "C";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09   n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Enter the city" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="searchicon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="cloudicon" />
      </div>
      <div className="weather-temp">
        24<span>{"\u00B0"}</span>c
      </div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidityIcon" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="windIcon" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/hr</div>
            <div className="text">wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
