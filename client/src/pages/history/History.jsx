import React, { useContext } from "react";
import { HistoryContext } from "../../contexts/history/HistoryProvider";
import Input from "../../Components/Input";
import SubmitButton from "../../Components/Button/SubmitButton";
import { FaSearch } from "react-icons/fa";

export default function History() {
  const { handleSubmit, handleChange, values, errors, historyValue } =
    useContext(HistoryContext);
  console.log(historyValue, "historyValue");
  return (
    <>
      <div className="min-h-screen bg-gray-800 ">
        <div className="flex items-center justify-center pt-5 relative">
          <form onSubmit={handleSubmit}>
            {/* Search section start */}
            <div>
              <div className="flex items-center gap-2 justify-center ">
                <p className="text-center font-bold text-white">Search</p>
                <div className="text-black">
                  <Input
                    type="text"
                    name="searchTerm"
                    className="border border-black rounded-md p-1 text-black "
                    placeholder="Search in the past"
                    onChange={handleChange}
                    value={values.searchTerm}
                  />
                </div>
                <div>
                  <SubmitButton
                    type="submit"
                    text={<FaSearch />}
                    className="bg-black text-white p-2 rounded-md hover:bg-opacity-70 transition-all"
                  />
                </div>
              </div>
              <div className="text-center text-[19px] ">
                {errors.searchTerm && (
                  <p className="text-red-500">{errors.searchTerm}</p>
                )}
              </div>
            </div>
            {/* Search section end */}
            {/* Weather Info start */}
            {historyValue.icon1 && (
              <>
              <div>
                <div className="text-center font-bold text-white pt-5">
                  {historyValue.location}
                  </div>
              </div>
                <div className="grid grid-cols-6 pt-5 ">
                  <div className="col-span-3 bg-gray-200 border-r border-black p-2">
                    <div className="text-center">Date</div>
                    <div className="text-center">Condition</div>
                    <div className="text-center">Temperature</div>
                  </div>
                  <div className="col-span-3 bg-gray-300 p-2">
                    <div className="text-center">{historyValue.date1}</div>
                    <div className="text-center">{historyValue.condition1}</div>
                    <div className="text-center">
                      {historyValue.maxtemp_c1} °C{" "}
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src={historyValue.icon1}
                        alt="weather icon"
                        className="w-10 h-10"
                      />{" "}
                    </div>
                  </div>
                </div>
              </>
            )}
            {historyValue.icon2 && (
              <>
                <div className="grid grid-cols-6 pt-5 ">
                  <div className="col-span-3 bg-gray-200 border-r border-black p-2">
                    <div className="text-center">Date</div>
                    <div className="text-center">Condition</div>
                    <div className="text-center">Temperature</div>
                  </div>
                  <div className="col-span-3 bg-gray-300 p-2">
                    <div className="text-center">{historyValue.date2}</div>
                    <div className="text-center">{historyValue.condition2}</div>
                    <div className="text-center">
                      {historyValue.maxtemp_c2} °C{" "}
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src={historyValue.icon2}
                        alt="weather icon"
                        className="w-10 h-10"
                      />{" "}
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* Weather Info end */}
          </form>
        </div>
      </div>
    </>
  );
}
