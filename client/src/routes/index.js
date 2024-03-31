import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import WeatherDetail from "../pages/weatherDetail/WeatherDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} index />
      <Route path="/weatherDetail"  element={<WeatherDetail />} index />
    </Routes>
  );
};

export default AppRoutes;