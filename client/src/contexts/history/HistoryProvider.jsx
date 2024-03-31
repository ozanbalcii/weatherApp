import { useFormik } from "formik";
import * as Yup from "yup";
import React, { createContext, useState } from "react";
import { saveHistoryValues } from "../../pages/history/services";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [historyValue, setHistoryValue] = useState([]);

  const { handleSubmit, handleChange, values, touched, errors, getFieldProps } =
    useFormik({
      initialValues: {
        searchTerm: "",
      },
      validationSchema: Yup.object({
        searchTerm: Yup.string()
          .required("Please enter a city name")
          .trim()
          .matches(
            /^[a-zA-ZığüşöçİĞÜŞÖÇ\s]*$/,
            "Only letters and spaces are allowed"
          )
          .min(2, "Search term must be at least 2 characters long"),
      }),
      onSubmit: async (values, { resetForm }) => {
        try {
          const results = await saveHistoryValues(values.searchTerm);
            const historyData = {
            location: results.data.location.name,
             date1: results.data.forecast.forecastday[0].date,
             date2: results.data.forecast.forecastday[1].date,
             condition1 : results.data.forecast.forecastday[0].day.condition.text,
             condition2 : results.data.forecast.forecastday[1].day.condition.text,
             icon1 : results.data.forecast.forecastday[0].day.condition.icon,
             icon2 : results.data.forecast.forecastday[1].day.condition.icon,
             maxtemp_c1 : results.data.forecast.forecastday[0].day.maxtemp_c,
             maxtemp_c2 : results.data.forecast.forecastday[1].day.maxtemp_c,

            };
            setHistoryValue(historyData);
         
          resetForm();
        } catch (error) {
          console.log(error, "error");
        }
      },
    });
   
  const data = {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    getFieldProps,
    historyValue,
  };
  return <HistoryContext.Provider value={data}>{children}</HistoryContext.Provider>;
};
