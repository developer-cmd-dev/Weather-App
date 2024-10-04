import React, { useEffect, useState, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../features/Weather/weatherSlice";
import { hideSpinner, showSpinner } from "../features/Spinner/spinnerSlicer";
import { ErrorComponent, Spinner } from "./index";

function Location() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.Spinner);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location == "") {
      inputRef.current.focus();
    } else {
      dispatch(fetchWeather(location.toLowerCase().trim()));
      dispatch(showSpinner("forManualLocation"));
      setLocation("");
    }
  };

  const geoLocation = async () => {
    dispatch(showSpinner("forAutoLocation"));
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getCurrentLocation(position);
        },
        (err) => {
          getCurrentLocation(err);
        }
      );
    }
  };

  const getCurrentLocation = async (cordinate) => {
    try {
      const data = await cordinate;
      const locationName = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${data.coords.latitude}&lon=${data.coords.longitude}&apiKey=${import.meta.env.VITE_GOOGLEMAP_API_KEY}`
      );
      const response = await locationName.json();
      console.log(response);
      dispatch(fetchWeather(response.features[0].properties.city));
      dispatch(hideSpinner());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-none backdrop-blur-md h-[30%] w-full p-2 border rounded-xl border-gray-500 dark:border-none dark:bg-gray-900
                    sm:bg-none sm:backdrop-blur-md sm:h-[30%] sm:w-full sm:p-2
                    lg:w-[35%] lg:rounded-xl lg:h-80 lg:backdrop-blur-md
                    "
    >
      <form
        action=""
        className=" h-full w-full flex items-center justify-around flex-col"
      >
        <h1
          htmlFor=""
          className="hidden sm:hidden md:hidden lg:block  lg:w-full lg:text-white lg:text-[1.4em] lg:text-center lg:font-playWrite lg:font-bold"
        >
          Weather App
        </h1>
        <input
          onChange={(e) => {
            setLocation(e.target.value);
            dispatch(hideSpinner());
          }}
          required={true}
          value={location}
          className="border-none w-[90%] h-14 p-3 rounded-lg"
          type="text"
          placeholder="E.g:Kolkata,Delhi,Mumbai.."
          ref={inputRef}
        />

        <div
          className="button flex justify-around items-center w-full
                        lg:flex-col lg:h-[50%] "
        >
          <button
            type="submit"
            onClick={handleSubmit}
            className={`flex items-center justify-around rounded-lg border-none dark:bg-blue-700 dark:text-white bg-black text-white w-32 h-12 text-md px-4
            sm:flex sm:items-center sm:justify-around sm:rounded-lg sm:border-none sm:bg-black sm:text-white sm:w-32 sm:h-12 text-md sm:px-4 sm:border
            md:flex md:items-center md:justify-around md:rounded-lg md:border-none md:bg-black md:text-white md:w-44 md:h-14 md:text-xl md:px-8
            lg:w-64 
            `}
          >
            {isLoading.spinners.forManualLocation == true ? (
              <Spinner
                height="30"
                width="30"
                color="White"
                radius="5"
              />
            ) : (
              <p className="w-full flex items-center justify-around">
                Search Location
              </p>
            )}
          </button>

          <button
            type="button"
            onClick={geoLocation}
            className={`flex items-center justify-around rounded-lg border-none dark:bg-blue-700 dark:text-white bg-black text-white w-32 h-12 text-md px-4
            sm:flex sm:items-center sm:justify-around sm:rounded-lg sm:border-none  sm:w-32 sm:h-12 text-md sm:px-4 sm:border
            md:flex md:items-center md:justify-around md:rounded-lg md:border-none  md:w-64 md:h-14 md:text-xl md:px-8
            `}
          >
            {isLoading.spinners.forAutoLocation == true ? (
              <Spinner
                height="30"
                width="30"
                color="White"
                radius="5"
              />
            ) : (
              <p className="flex items-center justify-around">
                Use Current Location
              </p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Location;
