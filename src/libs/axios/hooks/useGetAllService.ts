import { AxiosError } from "axios";

import { useAxios } from "../context";

export type UseGetAllServiceType = {
  url: string;
};

export const useGetAllService = <T>() => {
  const axios = useAxios();

  const sendRequest = async (props: UseGetAllServiceType): Promise<{ data?: T; error?: string }> => {
    const { url } = props;
    try {
      const response = await axios.get<T>(url);
      return { data: response.data };
    } catch (err) {
      const axiosError = err as AxiosError;
      return {
        error: axiosError.response?.data ? JSON.parse(JSON.stringify(axiosError.response)) : axiosError.message,
      };
    }
  };

  return { sendRequest };
};
