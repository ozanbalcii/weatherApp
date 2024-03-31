import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import { getWatchLists } from "../weatherDetail/services";
import Button from "../../Components/Button/index";
import { getAllWeatherConditions } from "../../services";

export default function WatchList() {
  const [data, setData] = useState();
  const [favData, setFavData] = useState("");
  const fetchWatchList = async () => {
    try {
      const res = await getWatchLists();
      console.log(res, "watchlist");
      const list = res?.data?.map((item) => ({
        id: item.id,
        name: item.name,
      }));
      setData(list);
      console.log(list, "list");
    } catch (error) {
      console.log(error, "error");
    }
  };
  const fetchWeather = async () => {
    try {
        console.log("favData:", favData); 
      const results = await getAllWeatherConditions(favData);
      setFavData(results);
      console.log(results, "Izmir");
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleItemClick = (itemName) => {
    setFavData(itemName);
  };

  useEffect(() => {
    fetchWatchList();
  }, []);
  
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-gray-100 p-4">
          <div className="max-w-md mx-auto bg-white border border-black rounded-xl overflow-hidden md:max-w-2xl">
            <div className="p-4 font-bold text-[22px]">Favorites</div>
            <div className="md:flex">
              <div className="pl-5">
                {data?.map((item) => (
                  <div key={item?.id}>
                    <Button
                        onClick={() => {
                            handleItemClick(item.name);
                           
                        }}
                      className="text-xl !border-none text-gray-800 mb-2 transition-all"
                    >
                      - {item.name}
                    </Button>
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
