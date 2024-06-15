import axios from "axios";
import { Toast } from "../../utils/Toasts";
import { urls } from "../Urls";

export class ChatService {
  static axiosInstance = axios.create({
    baseURL: urls.local_base_url,
    headers: {
      "Content-Type": "application/json",
    },
  });

  static async get(url, config = {}) {
    try {
      const token = localStorage.getItem("accessToken");
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
      const token = localStorage.getItem("accessToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await this.axiosInstance.post(url, body, {
        ...config,
        headers,
      });
      return response.data;
    } catch (error) {
      this.handleErrors(error);
      return Promise.reject(error);
    }
  }

  static async put(url, body, config = {}) {
    try {
      const token = localStorage.getItem("accessToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await this.axiosInstance.put(url, body, {
        ...config,
        headers,
      });
      if (response) {
        return response.data;
      }
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
    } else if (error.response && error.response.status === 401) {
      const errorMessage =
        error.response.data.message ||
        "Something went wrong, please try again.";
      Toast.error(errorMessage);
      localStorage.removeItem("accessToken");
      window.location.href = "/signin";
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
