import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import AllProducts from "./AllProducts";

const ShopCategory = () => {
  const { id: categoryss } = useParams();
  const axiosPublice = useAxiosPublice();

  const { data: eachCategory = [], refetch } = useQuery({
    queryKey: ["eachCategory"],
    queryFn: async () => {
      const res = await axiosPublice.get(`/eachCategory/${categoryss}`);
      return res.data;
    },
  });

  //   console.log("check this ", eachCategory);
  return (
    <div>
      <AllProducts producted={eachCategory} />
    </div>
  );
};

export default ShopCategory;
