import React from "react";

const OrderCard = ({ items }) => {
  const { name, price, image, recipe } = items;
  return (
    <>
      {/* 01 */}
      <div className="card  p-1.5 card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="" />
        </figure>
        <div className="p-4 text-center">
          <h3 className="text-black font-semibold text-2xl mt-1.5">{name}</h3>
          <p className="text-sm py-3 pb-5">{recipe}</p>
          <div className="overflow-hidden">
            <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
