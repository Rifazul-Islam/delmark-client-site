import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useShops = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: shops, refetch } = useQuery({
    queryKey: ["shops", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/shops?email=${user?.email}`);
      return res.data;
    },
  });

  return [shops, refetch];
};

export default useShops;
