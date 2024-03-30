import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} index />
    </Routes>
  );
};

export default AppRoutes;
