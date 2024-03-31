import React, { useContext } from "react";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
import { HomeContext } from "../../contexts/home/HomeProvider";
import SubmitButton from "../../Components/Button/SubmitButton";
import Navbar from "../../Components/Navbar";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const {
    weatherDataForHomePage,
    handleSubmit,
    handleChange,
    values,
    locationDataForHomePage,
  } = useContext(HomeContext);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center pt-5 relative">
          <form onSubmit={handleSubmit}>
            {/* Search section start */}
            <div className="flex items-center gap-2 justify-center pb-5">
              <p className="text-center font-bold">Search</p>
              <div className="text-black">
                <Input
                  type={"text"}
                  name={"searchTerm"}
                  className={"border border-black rounded-md p-1 text-black"}
                  placeholder={"Search for a city"}
                  onChange={handleChange}
                  value={values.searchTerm}
                />
              </div>
              <div>
                <SubmitButton
                  type={"submit"}
                  text={(<FaSearch />)}
                  className="bg-black text-white p-2 rounded-md hover:bg-opacity-70 transition-all"
                />
              </div>
            </div>
            {/* Search section end */}
            {/* Weather Info start */}
            <div>
              {weatherDataForHomePage.icon && (
                <>
                  <div
                    className={`${
                      weatherDataForHomePage.is_day == "1"
                        ? "bg-yellow-200"
                        : "bg-gray-200"
                    }  border rounded-md border-black w-auto cursor-pointer hover:bg-opacity-40 p-2 md:w-full`}
                  >
                    <Link to="/weatherDetail">
                      <div className="grid grid-cols-2 md:grid-cols-2 ">
                        <div className="flex items-center just-center">
                          <div>
                            <img
                              src={weatherDataForHomePage.icon}
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

                        <div className="flex justify-center items-center gap-1">
                          <p className=" font-bold text-[18px] border-r border-black p-1">
                            {weatherDataForHomePage.temp_c} °C
                          </p>
                          <p className="font-semibold">
                            {" "}
                            {weatherDataForHomePage.condition}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
            {/* Weather Info end */}
          </form>
        </div>
      </div>
    </>
  );
}
