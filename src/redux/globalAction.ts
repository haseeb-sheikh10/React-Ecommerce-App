import axios from "axios";
import { API_URL } from "../constants";
import { setConfig } from "./globalSlice";

export const fetchConfig = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}configuration`);
    dispatch(setConfig(response.data.data));
    localStorage.setItem("config", JSON.stringify(response.data.data));
  } catch (error) {
    dispatch(setConfig(null));
    console.error(error);
  }
};
