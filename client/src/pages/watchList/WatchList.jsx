import React, {useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { getWatchLists, saveHistoryValues } from "../weatherDetail/services";
import { getAllWeatherConditions } from "../../services";

export default function WatchList() {
  const [data, setData] = useState();
  const [favData, setFavData] = useState("");

  const fetchWatchList = async () => {
    try {
      const res = await getWatchLists();
      const list = res?.data?.map((item) => ({
        id: item.id,
        name: item.name,
        temp_c: item.temp_c,
      }));
      setData(list);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const fetchWeather = async () => {
    try {
      const results = await getAllWeatherConditions(favData);
      setFavData(results);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const fetchHistoryValues = async () => {
    try {
      const results = await saveHistoryValues('London');
      console.log(results, "history");
    } catch (error) {
      console.log(error, "error");
    }
  };



  useEffect(() => {
    fetchWatchList();
    fetchWeather();
    fetchHistoryValues();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800 ">
        <div className="p-4">
          <div className="max-w-md mx-auto bg-white border border-black rounded-xl overflow-hidden md:max-w-2xl">
            <div className="p-4 font-bold text-[22px]">
              Watch List & Record{" "}
            </div>
            <div className="">
              <div className="pl-5">
                {data?.map((item) => (
                  <div key={item?.id} className="grid grid-cols-4 ">
                    <div className="text-xl text-gray-800 mb-2 col-span-3">
                        <div className="font-semibold">{item.name}:</div>
                        <div className="font-medium">
                          {`Temperature of the previous day: ${item.temp_c}°C`}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
