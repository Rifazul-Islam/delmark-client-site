import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, image, category, price, _id } = product;
  return (
    <Link to={`/shopDetails/${_id}`}>
      <div className="card  p-1.5 card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-72 " src={image} alt="" />
        </figure>
        <div className="p-4 text-left">
          <p> {category}</p>
          <h3 className="text-black font-semibold  my-1.5">{name}</h3>
          <p>${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
