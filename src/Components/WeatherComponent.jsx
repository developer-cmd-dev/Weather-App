import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";

function WeatherComponent() {
  const { weather } = useSelector(
    (state) => state.weatherApp
  );
  const [weatherData, setWeatherData] = useState({});

  useEffect(()=>{
    weather.cod == 200 && setWeatherData(weather)
  },[weather])


  function getDayName(dateString) {
    const date = new Date(dateString);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return (
    Object.keys(weatherData).length != 0 && (
      <div
        className={`bg-none w-[90%] h-screen backdrop-blur-md border rounded-xl border-gray-500 p-5  items-center justify-around flex-col
        sm:bg-none sm:w-[90%] sm:h-screen sm:backdrop-blur-md sm:border sm:rounded-xl sm:border-gray-500 sm:p-5 sm:flex sm:items-center sm:justify-around sm:flex-col
        lg:w-[55%] lg:h-[90%]
    
    `}
      >
        <div className=" w-full">
          <div
            className="cityname text-white font-thin flex justify-between items-center  w-full  
                      sm:text-white sm:font-thin sm:flex sm:justify-between sm:items-center  sm:w-full
                        "
          >
            <p className="tracking-widest sm:text-sm md:text-2xl ">
              {weatherData.city.name}/{weatherData.city.country}
            </p>
            <p className="tracking-widest opacity-55 sm:text-lg md:text-2xl ">
              {getDayName(weatherData.list[0].dt_txt)}{" "}
              {weatherData.list[0].dt_txt.substring(0, 11)} :{" "}
              {weatherData.list[0].dt_txt.substring(11, 16)}
            </p>
          </div>

          <div className="weatherData w-full flex items-center justify-around flex-col  h-full  ">
            <div
              className="w-full 
                         sm:flex sm:justify-center sm:items-center
                        md:flex md:justify-center md:items-center"
            >
              <div className="tempreature w-full  flex justify-center items-center   ">
                <h1
                  className="text-[5em] text-white 
                          sm:text-[8em] sm:text-white
                          md:text-[8em] md:text-white"
                >
                  {Math.trunc(Number(weatherData.list[0].main.temp) - 273.15)}°C
                </h1>
                <h1
                  className="text-[2em] text-white flex items-end w-full h-[120px] opacity-60
                          sm:text-[2em] sm:text-white
                          md:text-[2em] md:text-white
                           "
                >
                  {Math.trunc(
                    1.8 * (Number(weatherData.list[0].main.temp) - 273.15) + 32
                  )}
                  °F
                </h1>
              </div>
              <div
                className="  details text-white text-2xl w-full flex items-start justify-start flex-col 
                          sm:text-[1.7em] sm:h-full sm:flex sm:flex-col sm:justify-around sm:items-end sm:text-white 
                          md:text-[2em] md:h-full md:flex md:flex-col md:justify-around md:items-end md:text-white"
              >
                <h3>Humidity- {weatherData.list[0].main.humidity}%</h3>
                <h3 className=" 
                w-full flex items-center justify-start
                sm:w-full sm:flex sm:items-center sm:justify-end
                md:w-full md:flex md:items-center md:justify-end
                lg:w-full lg:flex lg:items-center lg:justify-end
                ">
                  {weatherData.list[0].weather[0].main} -{" "}
                  <img
                    className="w-20  "
                    src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`}
                    alt=""
                  />
                </h3>
                <h3>
                  Wind-{" "}
                  {Math.trunc(Number(weatherData.list[0].wind.speed) * 3.6)}{" "}
                  kmph
                </h3>
              </div>
            </div>

            <div
              className="fiveDayForecast grid grid-cols-3 grid-rows-3 gaps-3 gap-y-1 h-72 w-full
                        sm:gaps-3 sm:gap-y-44
                        md:grid-cols-4 md:gap-y-44
                        lg:flex  lg:justify-around lg:items-center
                        lg:w-full 
                        "
            >
              {Object.keys(weatherData).length != 0 ? (
                weatherData.list.map((item) =>
                  item.dt_txt.substring(11, 13) == "00" ? (
                    <div
                      key={item.dt}
                      className="bg-black bg-opacity-50 flex items-center flex-col  justify-center text-white rounded-2xl w-24 h-26
                          sm:w-32 sm:h-32 sm:text-xl  
                          md:w-36 md:h-32 md:text-[1em]
                          lg:w-36 lg:h-36   "
                    >
                      <div className="date_time w-[50%] flex items-center justify-around  h-full">
                        <h1>{getDayName(item.dt_txt).substring(0, 3)}</h1>
                        <h1>{item.dt_txt.substring(8, 10)}</h1>
                      </div>
                      <div className="logo w-full flex items-center justify-center h-full">
                        <img
                          className="w-10"
                          src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                          alt=""
                        />{" "}
                      </div>
                      <div className="temp w-full flex items-center justify-around h-full">
                        <h1>{Math.trunc(Number(item.main.temp) - 273.15)}°C</h1>
                        <h1>{Math.trunc(1.8 *(Number(item.main.temp) - 273.15) +32)}°F</h1>
                      </div>
                    </div>
                  ) : null
                )
              ) : (
                <p>Data is empty</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default WeatherComponent;
