import { Link } from "react-router-dom";
import { HomeContext } from "../../contexts/home/HomeProvider";
import { useContext } from "react";

export default function Navbar({ goToHomePage}) {
  const { weatherData } = useContext(HomeContext);
  return (
    <nav className="bg-[#10151d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">Weather App</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {/* {weatherData.icon && ( */}
                  <>
                    <Link
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/watchList"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                     Favorites
                    </Link>
                  </>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
