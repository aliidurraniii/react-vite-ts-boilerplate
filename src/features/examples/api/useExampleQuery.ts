import { useAxiosService } from "@libs/axios";
import { useQuery } from "@libs/query-client";

const useExampleQuery = () => {
  const { getAllService } = useAxiosService();

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getAllService({ url: "/todos" }),
  });

  return { todos: data };
};

export default useExampleQuery;
