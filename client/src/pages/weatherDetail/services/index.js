import axios from "axios";

const baseURL = "http://localhost:3001";

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
