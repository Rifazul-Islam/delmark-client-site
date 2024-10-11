import Lottie from "lottie-react";
import deliveryTruck from "../../../../../public/deli.json";

const Delivery = () => {
  return (
    <div className="bg-gray-100 rounded-lg">
      <h2 className="text-[#16A34A] text-2xl font-semibold  text-center pt-7">
        Currently Delivering in
      </h2>
      <div className=" flex justify-center gap-3 pt-6">
        <button className="btn btn-sm hover:bg-accent hover:text-black bg-[#16A34A] text-white ">
          Ambary
        </button>
        <button className="btn btn-sm hover:bg-accent hover:text-black bg-[#16A34A] text-white ">
          Dinajpur
        </button>
        <button className="btn btn-sm hover:bg-accent hover:text-black bg-[#16A34A] text-white ">
          Fulbary
        </button>
      </div>

      <button className="relative ml-10 px-4 py-2 bg-green-500 text-black font-semibold rounded-full shadow-md">
        Already Add To Cart
        <span className="absolute top-[50%] left-0 w-3 h-1.5 bg-green-500 -translate-x-[50%] -translate-y-[50%] rounded-full transform rotate-45"></span>
      </button>

      <div className="w-96 mx-auto">
        <Lottie animationData={deliveryTruck} loop={true} />
      </div>
    </div>
  );
};

export default Delivery;
