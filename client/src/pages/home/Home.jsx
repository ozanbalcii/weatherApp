import React, { useContext, useEffect } from "react";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
import { HomeContext } from "../../contexts/home/HomeProvider";
import SubmitButton from "../../Components/Button/SubmitButton";

export default function Home() {
  const {
    getFieldProps,
    weatherDataForHomePage,
    loading,
    error,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  } = useContext(HomeContext);

  return (
    <>
      <div>
        {/* Navbar Section */}
        <nav className="bg-[#10151d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-white font-bold text-xl">
                    Weather App
                  </span>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-2">
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    <div></div>
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Watch List
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Content Section */}
        <div>
          <div className="flex items-center justify-center p-5">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-2 pb-5">
                  <p className="text-center font-bold">Search for a city</p>
                  <div className="text-black">
                    <Input
                      type={"text"}
                      name={"searchTerm"}
                      className={
                        "border border-black rounded-md p-1 text-black"
                      }
                      placeholder={"Search"}
                      onChange={handleChange}
                      value={values.searchTerm}
                    />
                  </div>
                  <div>
                    <SubmitButton
                      type={"submit"}
                      text={"Search"}
                      className="bg-black text-white p-1 rounded-md hover:bg-opacity-70 transition-all"
                    />
                  </div>
                </div>
              </div>
              {weatherDataForHomePage.icon && (
                <>
                  <div className="bg-gray-200 border rounded-md border-black w-auto cursor-pointer">
                  <Link to="/otherpage">
                    <div className="flex items-center justify-center">
                      <div>
                        <img
                          src={weatherDataForHomePage.icon}
                          alt="weather icon"
                          className="w-20 h-20"
                        />
                      </div>
                      <div>
                        <p className="text-center">
                          {weatherDataForHomePage.condition}
                        </p>
                        <p className="text-center">
                          {weatherDataForHomePage.temp_c}{" "}
                        </p>
                        <p className="text-center">
                          {weatherDataForHomePage.date}
                        </p>
                      </div>
                    </div>
                  </Link>

                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
