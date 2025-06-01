import { AxiosError } from "axios";

import { useAxios } from "../context";

export type UseCreateServiceType<TPayload> = {
  url: string;
  payload: TPayload;
};

export const useCreateService = <TResponse, TPayload>() => {
  const axios = useAxios();

  const sendRequest = async (props: UseCreateServiceType<TPayload>): Promise<{ data?: TResponse; error?: string }> => {
    const { url, payload } = props;
    try {
      const response = await axios.post<TResponse>(url, payload);
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
