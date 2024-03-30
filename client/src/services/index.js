import axios from "axios";

const baseURL = "http://api.weatherapi.com/v1"


export const getAllWeatherConditions = async (searchTerm) => {
    try {
      const response = await axios.get(`${baseURL}/current.json?key=fe19d13f36714917acf140712242903&q=${searchTerm}`, {
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, data: error.response.data };
    }
  };
  