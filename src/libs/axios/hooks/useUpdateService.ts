import { AxiosError } from "axios";

import { useAxios } from "../context";

export type UseUpdateServiceType<TPayload> = {
  url: string;
  payload: TPayload;
};

export const useUpdateService = <TResponse, TPayload>() => {
  const axios = useAxios();

  const sendRequest = async (props: UseUpdateServiceType<TPayload>): Promise<{ data?: TResponse; error?: string }> => {
    const { url, payload } = props;
    try {
      const response = await axios.put<TResponse>(url, payload);
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
