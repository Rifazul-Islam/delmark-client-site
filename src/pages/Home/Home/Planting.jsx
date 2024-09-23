import React from "react";
import plantin from "../../../assets/home/planing.jpg";
const Planting = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(${plantin})`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex md:items-center justify-center h-full">
        <div className="w-9/12 mx-auto h-56 md:h-[200px] rounded-lg bg-[#ffffff]   flex items-center justify-center">
          <h3 className="text-center text-3xl font-bold">
            Planting Vegetables
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Planting;
