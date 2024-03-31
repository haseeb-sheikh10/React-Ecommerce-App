import axios from "axios";
import { API_URL } from "../constants";
import { setConfig } from "./globalSlice";

export const fetchConfig = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}configuration`);
    const configData = response.data.data;
    dispatch(setConfig(configData));
    localStorage.setItem("config", JSON.stringify(configData));

    document.body.style.backgroundColor = configData.body_color || "";
    document.body.style.color = configData.body_text_color || "";

    const titleElement = document.getElementById(
      "site_title"
    ) as HTMLTitleElement | null;
    if (titleElement) {
      titleElement.textContent = configData.site_title || "";
    } else {
      console.error("Title element not found.");
    }

    const faviconElement = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;
    if (faviconElement) {
      faviconElement.href = configData.favicon || "";
    } else {
      console.error("Favicon element not found.");
    }
  } catch (error) {
    // Handle errors and dispatch action to set configuration to null
    dispatch(setConfig(null));
    console.error(error);
  }
};
