import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  // const [applicationId, setApplicationId] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const axiosPublic = useAxiosPublice();
  // const { data: reviewDataed } = useQuery({
  //   queryKey: ["reviewsess", modelId],
  //   enabled: !!modelId,
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/category/${modelId}`);
  //     return res?.data;
  //   },
  // });

  // console.log("shope card", applicationId);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 px-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
