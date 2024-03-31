import React, { useEffect, createContext, useContext, useState } from "react";
import { format } from "date-fns";
import { forecast, getAllWeatherConditions } from "../../services";
import { useFormik } from "formik";
import * as Yup from "yup";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [weatherDataForHomePage, setWeatherDataForHomePage] = useState([]);
  const [locationDataForHomePage, setLocationDataForHomePage] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [forecastValue, setForecaseValue] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { handleSubmit, handleChange, values, touched, errors, getFieldProps } =
    useFormik({
      initialValues: {
        searchTerm: "",
      },
      validationSchema: Yup.object({
        searchTerm: Yup.string().required("Required"),
      }),
      onSubmit: async (values, { resetForm }) => {
        try {
          const results = await getAllWeatherConditions(values.searchTerm);
          console.log(results, "results");
          if (results && results.data && results.data.current) {
            const currentWeatherForHomePage = {
              temp_c: results.data.current.temp_c,
              condition: results.data.current.condition.text,
              icon: results.data.current.condition.icon,
              date: results.data.current.last_updated,
              is_day: results.data.current.is_day,
            };
            const weatherDataDetail = {
              temp_c: results.data.current.temp_c,
              feelslike_c: results.data.current.feelslike_c,
              pressure_in: results.data.current.pressure_in,
              wind_degree: results.data.current.wind_degree,
              humidity: results.data.current.humidity,
              condition: results.data.current.condition.text,
              date: results.data.current.last_updated,
              icon: results.data.current.condition.icon,
              gust_kph: results.data.current.gust_kph,
              is_day: results.data.current.is_day,
            };
            setWeatherData(weatherDataDetail);

            const locationForHomePage = {
              country: results.data.location.country,
              name: results.data.location.name,
              localtime: results.data.location.localtime,
            };
            setWeatherDataForHomePage(currentWeatherForHomePage);
            setLocationDataForHomePage(locationForHomePage);

            const forecastData = await forecast(values.searchTerm);
            console.log(forecastData, "forecastData");
            if (
              forecastData &&
              forecastData.data &&
              forecastData.data.forecast &&
              forecastData.data.forecast.forecastday
            ) {
              const forecastValue = forecastData.data.forecast.forecastday.map(
                (item) => ({
                  sunrise: item.astro.sunrise,
                  sunset: item.astro.sunset,
                  hour: item.hour,
                  avgtemp_c: item.day.avgtemp_c,
                  condition: item.day.condition.text,
                  icon: item.day.condition.icon,
                })
              );
              setForecaseValue(forecastValue);
            }
          } else {
            console.log("The data structure is not correct");
          }

          resetForm();
        } catch (error) {
          console.log(error, "error");
        }
      },
    });

  //   useEffect(() => {
  //     fetchWeather();
  //   }, []);

  const data = {
    weatherData,
    weatherDataForHomePage,
    locationDataForHomePage,
    loading,
    error,
    handleSubmit,
    handleChange,
    values,
    touched,
    getFieldProps,
    errors,
    watchlist,
    setWatchlist,
    forecastValue,
  };
  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
};
