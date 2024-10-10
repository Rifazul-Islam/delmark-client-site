import React, { useState } from "react";
import { FaClover } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FiEye } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { VscHeart } from "react-icons/vsc";
import { toast } from "react-toastify";
import { FaMinus, FaPlus } from "react-icons/fa";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import { useQuery } from "@tanstack/react-query";
import useCategory from "../../../../hooks/useCategory";

const Views = ({ product }) => {
  const [modelId, setModelId] = useState(null);
  const [category, refetch] = useCategory();
  const axiosPublice = useAxiosPublice();
  // const [category, refetch] = useCategory();
  const [collect, setCollect] = useState({});

  // const { data: results } = useQuery({
  //   queryKey: ["views", modelId],
  //   enabled: !!modelId,
  //   queryFn: async () => {
  //     const res = await axiosPublice.get(`/category/${modelId}`);
  //     return res.data;
  //   },
  // });

  const selectedProduct = category?.find((item) => item._id === modelId);

  // handlerModate();
  console.log("check this data id Suree", modelId, selectedProduct);

  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(1);

  const addToCart = (_id) => {
    toast.success("Product to cart Add", { autoClose: 1000 });
    console.log(_id);
  };

  return (
    <div className="space-y-3">
      <p
        onClick={() => addToCart(id)}
        className="bg-white cursor-pointer  hover:bg-primary hover:text-white w-8 h-8 rounded-full flex justify-center items-center"
      >
        <LuShoppingCart />
      </p>

      <div onClick={() => setModelId(product._id)}>
        <p className="bg-white cursor-pointer w-8 h-8 rounded-full flex justify-center items-center">
          <FiEye
            onClick={() => document.getElementById("my_modal_3").showModal()}
          />
        </p>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog
          id="my_modal_3"
          className="modal opacity-0 delay-200 scale-95 ease-out duration-500 transform transition-all"
        >
          <div className=" modal-box bg-[#ffff] w-11/12 h-[500px]  max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <div className="flex flex-col md:flex-row  gap-2 mt-10 ">
              <div className="md:w-1/2 w-full px-3  ">
                <img
                  className="rounded-lg h-[370px] w-full"
                  src={selectedProduct?.image}
                  alt=""
                />
              </div>
              <div className="md:w-1/2 w-full px-3 md:px-0 text-left">
                <div>
                  <span className="text-gray-500 font-inter font-semibold">
                    {/* {views?.category} */}
                  </span>
                  <h2 className="py-1.5 text-2xl font-poppins font-semibold">
                    {selectedProduct?.name}
                  </h2>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="px-4 py-1 bg-gray-300 rounded mr-9">
                      In Stock
                    </span>
                    <Rating
                      style={{ maxWidth: 92 }}
                      value={selectedProduct?.reviews}
                      readOnly
                    />
                    <span> ({selectedProduct?.reviews} Views) </span>
                  </div>
                  {/* Description Area */}
                  <div className="mt-4">
                    {open ? (
                      <>
                        <p className="text-green-700 text-sm">
                          {selectedProduct?.description}

                          <span
                            className=" cursor-pointer"
                            onClick={() => setOpen(false)}
                          >
                            See Less
                          </span>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-green-700 text-sm">
                          {collect?.description?.slice(0, 100)}
                          <span
                            className=" cursor-pointer"
                            onClick={() => setOpen(true)}
                          >
                            ...See more
                          </span>
                        </p>
                      </>
                    )}
                  </div>
                  <p className="text-2xl font-bold font-poppins py-3">
                    {" "}
                    ${collect?.price}
                  </p>

                  {/* quantity Increatem System and Adto cart */}
                  <p> Quantity</p>
                  <div className="flex  items-center mt-2">
                    <div>
                      <span className="flex  gap-4 py-2 px-10 bg-gray-200  rounded mr-9 space-x-2">
                        {counter === 1 ? (
                          <>
                            <FaMinus className="mt-1.5 " />
                          </>
                        ) : (
                          <>
                            <button onClick={() => setCounter(counter - 1)}>
                              <FaMinus className="cursor-pointer" />
                            </button>
                          </>
                        )}

                        <p className="font-semibold"> {counter}</p>
                        <button onClick={() => setCounter(counter + 1)}>
                          <FaPlus className="cursor-pointer" />
                        </button>
                      </span>
                    </div>
                    <div>
                      <button className="btn px-24 bg-primary text-white hover:bg-accent">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <div className=" flex mt-5">
                    <p className="flex items-center gap-3">
                      <span>
                        <VscHeart />
                      </span>
                      Add Wishlist
                    </p>
                    <p className="flex items-center gap-3 pl-4">
                      <span>
                        <FaClover />
                      </span>
                      Ask a question
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>

      <p className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
        <VscHeart />
      </p>
    </div>
  );
};

export default Views;
