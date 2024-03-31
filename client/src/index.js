import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HomeProvider } from "./contexts/home/HomeProvider";
import { HistoryProvider } from "./contexts/history/HistoryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeProvider>
      <HistoryProvider> 
      <App />
      </HistoryProvider>
    </HomeProvider>
  </React.StrictMode>
);

reportWebVitals();
