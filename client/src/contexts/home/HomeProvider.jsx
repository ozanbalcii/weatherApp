import React, { useEffect, createContext, useContext, useState } from "react";
import { format } from "date-fns";
import { getAllWeatherConditions } from "../../services";
import { useFormik } from "formik"
import * as Yup from "yup";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [weatherDataForHomePage, setWeatherDataForHomePage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//    const fetchWeather = async() => {
//      try {
//          const results = await getAllWeatherConditions('Izmir');
//          setWeatherData(results)
//          console.log(results, 'Izmir')
//      } catch (error) {
//          console.log(error, 'error')
//      }
//  }

const  { handleSubmit, handleChange, values, touched, errors, getFieldProps } = useFormik({
    initialValues: {
        searchTerm: "",
    },
    validationSchema: Yup.object({
        searchTerm: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
        try {
            const results = await getAllWeatherConditions(values.searchTerm);
            if (results && results.data && results.data.current) {
                const currentWeatherForHomePage = {
                    temp_c: results.data.current.temp_c,
                    condition: results.data.current.condition.text,
                    icon: results.data.current.condition.icon ? results.data.current.condition.icon : null,
                    date: results.data.current.last_updated
                };
                setWeatherDataForHomePage(currentWeatherForHomePage);
            } else {
                console.log("The data structure is not correct");
            }
        
            resetForm();
        } catch (error) {
            console.log(error, 'error');
        }
        
    },
})

//   useEffect(() => {
//     fetchWeather();
//   }, []);

  

const data = {  weatherDataForHomePage, loading, error,  handleSubmit, handleChange, values, touched, getFieldProps, errors }
  return (
    <HomeContext.Provider value={data}>
      {children}
    </HomeContext.Provider>
  );
}

