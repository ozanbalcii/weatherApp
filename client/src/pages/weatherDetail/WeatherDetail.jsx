import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import SubmitButton from "../../Components/Button/SubmitButton";
import { HomeContext } from "../../contexts/home/HomeProvider";
import { Link } from "react-router-dom";

export default function WeatherDetail() {
  const { weatherData, locationDataForHomePage } = useContext(HomeContext);
  console.log(weatherData, " weatherDataweatherData");
  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="flex items-center justify-center pt-5 relative">
            <div>
              {/* Weather Info start */}
              <div>
                {weatherData.icon && (
                  <>
                    <div className="bg-gray-200 border rounded-md border-black w-auto  py-4 px-10 md:w-full">
                      <div>
                        <div className="grid grid-cols-2 md:grid-cols-2 ">
                          <div className="flex items-center just-center pr-10">
                            <div>
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
                            </div>
                          </div>
                          <div className="text-center mb-5">
                            <p>Conition: {weatherData.condition}</p>
                            <p>Temperature: {weatherData.temp_c} °C</p>
                            <p>feels like: {weatherData.feelslike_c} °C</p>
                            <p> Pressure: {weatherData.pressure_in}</p>
                            <p> Wind Degree: %{weatherData.wind_degree}</p>
                            <p> humidity {weatherData.humidity}</p>
                            <p>{weatherData.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* Weather Info end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
