import { createContext, ReactNode } from "react";

import {
  useCreateService,
  useDeleteService,
  useGetAllService,
  useGetService,
  useUpdateService,
} from "@libs/axios/hooks";

export type AxiosServiceContextType = {
  getAllService: ReturnType<typeof useGetAllService>["sendRequest"];
  getService: ReturnType<typeof useGetService>["sendRequest"];
  createService: ReturnType<typeof useCreateService>["sendRequest"];
  updateService: ReturnType<typeof useUpdateService>["sendRequest"];
  deleteService: ReturnType<typeof useDeleteService>["sendRequest"];
};

export const AxiosServiceContext = createContext<AxiosServiceContextType | null>(null);

export const AxiosServiceProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const { sendRequest: getAllService } = useGetAllService();
  const { sendRequest: getService } = useGetService();
  const { sendRequest: createService } = useCreateService();
  const { sendRequest: updateService } = useUpdateService();
  const { sendRequest: deleteService } = useDeleteService();

  return (
    <AxiosServiceContext.Provider value={{ getAllService, getService, createService, updateService, deleteService }}>
      {children}
    </AxiosServiceContext.Provider>
  );
};
