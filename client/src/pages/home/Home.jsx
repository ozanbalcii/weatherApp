import React from "react";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";

export default function Home() {
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
        <Input
            type={"text"}
            className={"border border-black rounded-md p-1"}
            placeholder={"Search"}
            //   value={searchTerm}
            //   onChange={handleSearch}
          />
        </div>
        </div>
      </div>
    </>
  );
}
