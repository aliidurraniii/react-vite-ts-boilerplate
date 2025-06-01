import { AxiosError } from "axios";

import { useAxios } from "../context";

export type UseGetServiceType = {
  id: string | number;
  url: string;
};

export const useGetService = <T>() => {
  const axios = useAxios();

  const sendRequest = async (props: UseGetServiceType): Promise<{ data?: T; error?: string }> => {
    const { id, url } = props;
    try {
      const endpoint = `${url}/${id}`;
      const response = await axios.get<T>(endpoint);
      return { data: response.data };
    } catch (err) {
      const axiosError = err as AxiosError;
      return {
        error: axiosError.response?.data ? String(axiosError.response.data) : axiosError.message,
      };
    }
  };

  return { sendRequest };
};
