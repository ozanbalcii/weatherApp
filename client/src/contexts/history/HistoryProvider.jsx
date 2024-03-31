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
          console.log(results, "results");
          if (results && results.data && results.data.current) {
            const historyData = {
              temp_c: results.data.current.temp_c,
              condition: results.data.current.condition.text,
              icon: results.data.current.condition.icon,
              date: results.data.current.last_updated,
              is_day: results.data.current.is_day,
            };
            setHistoryValue(historyData);
          } else {
            console.log("The data structure is not correct");
          }
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
