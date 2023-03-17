import { useState } from "react";
import {
  weatherOptions,
  WEATHER_API_URL,
  WEATHER_API_KEY,
  WEATHER_API_URL1,
} from "./api/api";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Search from "./components/search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const onSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // const latitude = +(+lat).toFixed(4);
    // const longitude = +(+lon).toFixed(4);

    // fetch(
    //   "https://meteostat.p.rapidapi.com/point/daily?lat=52.409538&lon=16.931992&start=2023-03-16&end=2023-03-23&alt=184&units=metric",
    //   weatherOptions
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);

    //     setForecast({ city: searchData.label, ...response });
    //   })
    //   .catch((err) => console.error(err));

    // console.log(forecast);

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));

    // Promise.all([currentWeatherFetch, forecastFetch])
    //   .then(async (response) => {
    //     const currentWeatherResponse = await response[0].json();
    //     const forecastResponse = await response[1].json();

    //     setCurrentWeather({
    //       city: searchData.label,
    //       ...currentWeatherResponse,
    //     });
    //     setForecast({ city: searchData.label, ...forecastResponse });
    //   })
    //   .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={onSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
