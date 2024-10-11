import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import { useQuery } from "@tanstack/react-query";
import "./Shop.css";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { div } from "framer-motion/client";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [count, setCount] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(21 / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  // if (count > 0 && itemsPerPage > 0) {
  //   const numberOfPages = Math.ceil(count / itemsPerPage);
  //   const pages = [...Array(numberOfPages).keys()];

  //   setPages(pages);
  // } else {
  //   console.log("Data Nai boss");
  // }

  const handlerPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlerNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  //  all Product Get
  useEffect(() => {
    axiosSecure
      .get(`/allCategory/pagination?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setProducts(res?.data);
      });
  }, [currentPage, itemsPerPage]);

  // Count Length get
  useEffect(() => {
    axiosSecure.get("/shopCount").then((res) => {
      return setCount(res?.data?.count);
    });
  }, [axiosSecure]);

  // const { data: counts } = useQuery({
  //   queryKey: ["count"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/shopCount");

  //     return res.data.count;
  //   },
  // });

  // if (counts) {
  //   setCount(counts);
  // }
  // const { data: reviewDataed } = useQuery({
  //   queryKey: ["reviewsess", modelId],
  //   enabled: !!modelId,
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/category/${modelId}`);
  //     return res?.data;
  //   },
  // });

  // console.log("shope card", applicationId);

  // console.log(products);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 px-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* pagination  */}
      <div className="my-24">
        {currentPage === 0 ? (
          <>
            <button disabled className="ml-3 px-5 h-10 btn bg-gray-400 btn-sm">
              <FaArrowLeft />
            </button>
          </>
        ) : (
          <button
            className=" ml-3 px-5 h-10 btn bg-gray-300 btn-sm"
            onClick={handlerPrevPage}
          >
            <FaArrowLeft />
          </button>
        )}
        {pages?.map((page, idx) => (
          <button
            className={`${
              currentPage === page ? "selected" : "def"
            } btn rounded-lg text-lg ml-2 `}
            onClick={() => setCurrentPage(page)}
            key={idx}
          >
            {page}
          </button>
        ))}

        {currentPage < pages.length - 1 ? (
          <>
            <button
              className="ml-3 px-5 h-10 btn bg-gray-300 btn-sm"
              onClick={handlerNextPage}
            >
              <FaArrowRight />
            </button>
          </>
        ) : (
          <button disabled className=" ml-3 px-5 h-10 btn bg-gray-300 btn-sm">
            <FaArrowRight />
          </button>
        )}

        {/* <select
          value={itemsPerPage}
          onChange={handlerItemsPerPage}
          name=""
          id=""
        >
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select> */}
      </div>
    </div>
  );
};

export default Shop;
