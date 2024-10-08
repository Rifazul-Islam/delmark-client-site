import React from "react";

const ProductCard = ({ product }) => {
  const { name, image, category, price } = product;
  return (
    <div className="card  p-1.5 card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-72 " src={image} alt="" />
      </figure>
      <div className="p-4 text-left">
        <p> {category}</p>
        <h3 className="text-black font-semibold  my-1.5">{name}</h3>
        <p>${price}</p>
        {/* <div className="overflow-hidden">
          <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
            Add To Cart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
