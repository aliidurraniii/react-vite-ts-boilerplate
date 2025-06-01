import Axios, { AxiosInstance } from "axios";
import { createContext, ReactNode } from "react";

export const AxiosContext = createContext<AxiosInstance | null>(null);

export const AxiosProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const axiosInstance = Axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://example.com/api",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        window.location.replace("/login");
      }
      return Promise.reject(error);
    }
  );

  return <AxiosContext.Provider value={axiosInstance}>{children}</AxiosContext.Provider>;
};
