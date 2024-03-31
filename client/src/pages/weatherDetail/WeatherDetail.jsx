import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { HomeContext } from "../../contexts/home/HomeProvider";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/index";

export default function WeatherDetail() {
  const { weatherData, locationDataForHomePage } = useContext(HomeContext);
  const [watchlist, setWatchlist] = useState([]);

  console.log(weatherData, " kkkk");
  console.log(locationDataForHomePage, " locationDataForHomePage");

  console.log(watchlist, 'watchlistwatchlistwatchlistwatchlist')


  const addToWatchlist = () => {
    setWatchlist(prevWatchlist => [...prevWatchlist, locationDataForHomePage.name]);
  };

  return (
    <>
      <div>
        <Navbar />
        {weatherData.icon ? (
          <>
            <div className="flex items-center justify-center pt-5 relative">
              <div>
                <>
                  <div
                    className={`  ${
                      weatherData.is_day == "1"
                        ? "bg-yellow-200"
                        : "bg-gray-200"
                    }   border rounded-md border-black w-auto py-4 px-10 md:w-full`}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-2 ">
                      <div className="flex items-center just-center pr-10 gap-4">
                        <div className="md:flex hidden">
                          <img
                            src={weatherData.icon}
                            alt="weather icon"
                            className="w-20 h-20"
                          />
                        </div>
                        <div className="font-bold">
                          <p className="text-center">
                            {locationDataForHomePage.name}
                          </p>
                          <p className="text-center">
                            {locationDataForHomePage.country}
                          </p>
                          <p className="text-center">{weatherData.date}</p>
                          <div>
                            <p className="text-center text-[25px]">
                              {weatherData.temp_c} °C
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-5 font-semibold md:text-[16px] text-[14px] ">
                        <div>
                          <p>Details:</p>
                          <p>Feels like: {weatherData.feelslike_c} °C</p>
                          <p> Pressure: {weatherData.pressure_in}</p>
                          <p> Wind Degree: %{weatherData.wind_degree}</p>
                          <p> Humidity: {weatherData.humidity}</p>
                          <p> Gust: {weatherData.gust_kph} kph</p>
                        </div>
                      </div>
                    </div>
                    <div>
                    <Button
                  onClick={addToWatchlist}
                  text={"Add to watchlist"}
                  className="bg-black text-white p-1 rounded-md hover:bg-opacity-70 transition-all"
                />
                    </div>
                  </div>
                </>
              </div>
              
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center pt-4 font-bold text-[25px]">
              <p>
                Please search for the city from the{" "}
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => (window.location.href = "/")}
                >
                  home
                </button>{" "}
                page first.
              </p>
            </div>
            
          </>
        )}
      </div>
    </>
  );
}
