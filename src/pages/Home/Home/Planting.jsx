import React from "react";
import plantin from "../../../assets/home/planing.jpg";
const Planting = () => {
  return (
    <div className="relative">
      <img
        className="w-full bg-fixed  h-auto md:h-[460px] rounded-lg"
        src={plantin}
        alt=""
      />
      <div className="flex md:items-center justify-center">
        <div className="w-8/12 mx-auto absolute top-16 md:top-24 h-52 rounded-lg bg-[#000] opacity-70  text-white">
          <h3 className="text-center pt-16 text-3xl  font-bold ">
            Planting Vagitavale
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Planting;
