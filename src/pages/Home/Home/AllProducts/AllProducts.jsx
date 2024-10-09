import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const AllProducts = ({ producted }) => {
  return (
    <div className="my-16">
      {/* Product Map Area */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 px-2">
        {producted?.length > 6 ? (
          <>
            {producted.slice(0, 7).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        ) : (
          <>
            {producted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </div>

      {producted.length > 6 && (
        <div className="overflow-hidden mx-auto text-center my-8 mt-12">
          <Link to="/shop">
            <button className="relative px-20  py-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-full shadow-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
              <span className="absolute inset-0 flex items-center justify-center transform transition-all duration-300">
                Show More
              </span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
