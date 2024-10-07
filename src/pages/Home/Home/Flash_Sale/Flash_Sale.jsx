import { div } from "framer-motion/client";
import React from "react";

const Flash_Sale = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 lg:px-14 ml-10 gap-8 my-14">
        {/* one products */}
        <div className=" p-2">
          <div className="w-28 h-28 rounded-full bg-slate-300 flex justify-center items-center">
            <img
              className="w-14 h-14"
              src="https://shofy.botble.com/storage/main/product-categories/1.png"
              alt=""
            />
          </div>
          <p className="mt-4">
            <h2 className="font-bold text-[20px]"> Head Phone</h2>
            <p> 5 Products</p>
          </p>
        </div>
        {/* 2 products */}
        <div className=" p-2">
          <div className="w-28 h-28 rounded-full bg-slate-300 flex justify-center items-center">
            <img
              className="w-14 h-14  "
              src="https://shofy.botble.com/storage/main/product-categories/5.png"
              alt=""
            />
          </div>
          <p className="mt-4">
            <h2 className="font-bold text-[20px]">With Bluetooth</h2>
            <p> 5 Products</p>
          </p>
        </div>
        {/* one products */}
        <div className=" p-2">
          <div className="w-28 h-28 rounded-full bg-slate-300 flex justify-center items-center">
            <img
              className="w-14 h-14  "
              src="https://shofy.botble.com/storage/main/product-categories/2.png"
              alt=""
            />
          </div>
          <p className="mt-4">
            <h2 className="font-bold text-[20px]"> Mobile Phone</h2>
            <p> 5 Products</p>
          </p>
        </div>
        {/* one products */}
        <div className=" p-2">
          <div className="w-28 h-28 rounded-full bg-slate-300 flex justify-center items-center">
            <img
              className="w-14 h-14  "
              src="https://shofy.botble.com/storage/main/product-categories/3.png"
              alt=""
            />
          </div>
          <p className="mt-4">
            <h2 className="font-bold text-[20px]"> Hard Pines</h2>
            <p> 5 Products</p>
          </p>
        </div>
        {/* one products */}
        <div className=" p-2">
          <div className="w-28 h-28 rounded-full bg-slate-300 flex justify-center items-center">
            <img
              className="w-14 h-14  "
              src="https://shofy.botble.com/storage/main/product-categories/4.png"
              alt=""
            />
          </div>
          <p className="mt-4">
            <h2 className="font-bold text-[20px]"> Smart Watch</h2>
            <p> 5 Products</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flash_Sale;
