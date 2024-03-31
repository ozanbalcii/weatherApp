import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import WeatherDetail from "../pages/weatherDetail/WeatherDetail";
import WatchList from "../pages/watchList/WatchList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} index />
      <Route path="/weatherDetail"  element={<WeatherDetail />} />
      <Route path="/watchList"  element={<WatchList />} />
    </Routes>
  );
};

export default AppRoutes;