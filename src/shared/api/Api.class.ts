import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
});

export class Api {
  static async get(url: string, params?: any) {
    try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  static async post(url: string, data: any) {
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  static async put(url: string, data: any) {
    try {
      const response = await axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  static async delete(url: string) {
    try {
      const response = await axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  static async patch(url: string, data: any) {
    try {
      const response = await axiosInstance.patch(url, data);
      return response.data;
    } catch (error) {
      this.handleAxiosError(error);
      throw error;
    }
  }

  static handleAxiosError(error: any) {
    if (error.response) {
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.error("Error", error.message);
    }
    console.error(error.config);
  }
}
