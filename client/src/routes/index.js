import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import WeatherDetail from "../pages/weatherDetail/WeatherDetail";
import WatchList from "../pages/watchList/WatchList";
import History from "../pages/history/History";
import Navbar from "../Components/Navbar";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} index />
        <Route path="/weatherDetail" element={<WeatherDetail />} />
        <Route path="/watchList" element={<WatchList />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
