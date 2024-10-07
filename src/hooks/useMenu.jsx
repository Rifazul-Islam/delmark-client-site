import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublice from "./useAxiosPublice";

const useMenu = () => {
  const axiosPublice = useAxiosPublice();
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("https://dalmart-server-site.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => setMenu(data));
  // }, []);

  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublice.get("/menu");
      return res.data;
    },
  });

  return [menu, refetch];
};

export default useMenu;
