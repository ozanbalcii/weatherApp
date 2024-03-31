import React, { useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { HomeContext } from "../../contexts/home/HomeProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../Components/Button/index";
import { saveWatchList } from "./services";

export default function WeatherDetail() {
  const { weatherData, locationDataForHomePage, forecastValue } =
    useContext(HomeContext);

  console.log(forecastValue, "forecastValue");
  const handleWatchList = async () => {
    try {
      const res = await saveWatchList(locationDataForHomePage.name);
      if (res.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res?.data?.message ?? "Successfully!",
          showConfirmButton: false,
          timer: 5000,
        });
        setTimeout(() => {
          window.location.href = `/watchList`;
        }, 3000);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: res?.data?.message ?? "Already on the watch list!",
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "Close",
        });
      }
    } catch (error) {
      console.log(error, "error");
    }
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
                    <div className="flex items-center justify-end pb-2">
                      <Button
                        onClick={handleWatchList}
                        text={"Add to watchlist"}
                        className="bg-black text-white p-1 rounded-md hover:bg-opacity-70 transition-all"
                      />
                    </div>
                    <div className="border-t border-black">
                      <div className="font-bold pt-4 ">Forecast</div>
                      <div>
                        {forecastValue.map((item) => (
                          <div key={item.sunrise}>
                            <div className="">
                              <div className="flex items-center justify-center gap-4">
                                <div>
                                  <p> Sunrise: {item.sunrise}</p>
                                  <p> Sunset: {item.sunset}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                  <div className="md:flex hidden">
                                    <img
                                      src={item.icon}
                                      alt="weather icon"
                                      className="w-20 h-20"
                                    />
                                  </div>
                                  <div>
                                    <p>{item.condition} weather later</p> 
                                    today
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center justify-center gap-4">
                                <div className="font-bold">
                                <p>   Estimated average temperature: {item.avgtemp_c}°C</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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
