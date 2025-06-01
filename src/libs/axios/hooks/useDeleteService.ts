import { AxiosError } from "axios";

import { useAxios } from "../context";

export type UseDeleteServiceType = {
  id: string | number;
  url: string;
};

export const useDeleteService = <TResponse>() => {
  const axios = useAxios();

  const sendRequest = async (props: UseDeleteServiceType): Promise<{ data?: TResponse; error?: string }> => {
    const { url, id } = props;
    try {
      const response = await axios.delete<TResponse>(`${url}/${id}`);
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
