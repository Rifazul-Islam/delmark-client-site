import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-16">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-primary"> All Products</h3>
        <h2 className="text-3xl font-bold font-poppins">Featured Products </h2>
      </motion.div>

      {/* Product Map Area */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 px-2">
        {products.slice(0, 7).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="overflow-hidden mx-auto text-center my-8 mt-12">
        {/* <button className="bg-[#E8E8E8] border-b-4 border-primary hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
          Show More
        </button> */}
        <Link to="/shop">
          <button className="relative px-20  py-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-full shadow-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
            <span className="absolute inset-0 flex items-center justify-center transform transition-all duration-300">
              Show More
            </span>
            <span className="absolute inset-0 flex items-center justify-center transform opacity-0 translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v3m0 12v3m6.364-10.364l-2.121 2.121M4.636 4.636l2.121 2.121m12.021 6.364l2.121 2.121M4.636 19.364l2.121-2.121"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;
