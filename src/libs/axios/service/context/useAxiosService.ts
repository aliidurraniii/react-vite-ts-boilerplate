import { useContext } from "react";

import { AxiosServiceContext } from "./AxiosServiceContext";

export const useAxiosService = () => {
  const context = useContext(AxiosServiceContext);
  if (!context) throw new Error("useAxiosService must be used within AxiosServiceProvider");
  return context;
};
