import axios from "axios";

const baseURL = "http://localhost:3001";
const baseURL_2 = "https://api.weatherapi.com/v1";

export const saveWatchList = async (name, temp_c) => {
  try {
    const response = await axios.post(`${baseURL}/watchList`, {
      name,
      temp_c
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error.response.data };
  }
};


 export const saveHistoryValues = async (searchTerm) => {
   try {
     const response = await axios.get(`${baseURL_2}/history.json?key=fe19d13f36714917acf140712242903&q=${searchTerm}&dt=2024-01-01&end_dt=2024-01-02`, {
       
     });
     return { success: true, data: response.data };
   } catch (error) {
     return { success: false, data: error.response.data };
   }
 };


export const getWatchLists = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/watchList`,
      );
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, data: error.response.data };
    }
  };
