import axios from "axios";
import Cookies from "js-cookie";
import { Toast } from "../../utils/Toasts";

export class AuthService {
  static axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  });

  static async get(url, config = {}) {
    try {
      const token = Cookies.get("userToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await this.axiosInstance.get(url, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      this.handleErrors(error);
      return Promise.reject(error);
    }
  }

  static async post(url, body, config = {}) {
    try {
      console.log("Post", url);
      const token = Cookies.get("userToken");

      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await this.axiosInstance.post(url, body, {
        ...config,
        headers,
      });
      console.log("response", response);
      return response.data;
    } catch (error) {
      this.handleErrors(error);
      return Promise.reject(error);
    }
  }

  static handleErrors(error) {
    if (error.response && error.response.status === 403) {
      Toast.error(
        "Access forbidden: You do not have permission to access this resource."
      );
    } else if (error.response) {
      const errorMessage =
        error.response.data.message ||
        "Something went wrong, please try again.";
      Toast.error(errorMessage);
    } else {
      Toast.error("Network error, please try again.");
    }
  }
}
