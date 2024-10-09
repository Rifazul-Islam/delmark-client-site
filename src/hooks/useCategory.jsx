import { useQuery } from "@tanstack/react-query";
import useAxiosPublice from "./useAxiosPublice";

const useCategory = () => {
  const axiosPublice = useAxiosPublice();

  const { data: category = [], refetch } = useQuery({
    queryKey: ["allCategory"],
    queryFn: async () => {
      const res = await axiosPublice.get("/allCategory");
      return res.data;
    },
  });

  return [category, refetch];
};

export default useCategory;
