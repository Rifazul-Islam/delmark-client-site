import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const ForYouSection = () => {
  const [products, setProducts] = useState();
  // this is Pacing Data
  useEffect(() => {
    fetch("/newProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);
  return (
    <div className=" my-10">
      <h3 className="text-xl mb-4 font-inter font-medium pl-2 ">
        Letest Products
      </h3>
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="grid grid-cols-1 lg:grid-cols-5 gap-4 px-3 cursor-pointer"
      >
        {products?.map((item) => (
          <div key={item?.id} className="bg-slate-50 border-2 rounded-md">
            <img className="h-full" src={item?.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYouSection;
