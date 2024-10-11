import { View } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Views from "./Views";
import { FaClover } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FiEye } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { VscHeart } from "react-icons/vsc";
import { toast } from "react-toastify";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product, setModelId, reviewData }) => {
  const { name, image, price, _id, category, description } = product;
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState(1);
  const [wished, setWished] = useState(false);

  const addToCart = (id) => {
    toast.success("Product cart from here", { autoClose: 500 });
    // console.log(id);
  };
  const handlerWishList = (wishlistId) => {
    toast.success("WishList Cart add here ");
    // console.log(wishlistId);
  };
  // console.log(wished);
  return (
    <div className="card  p-1.5 card-compact bg-base-100 shadow-xl ">
      <figure className="cursor-pointer relative group">
        <img className="w-full h-72 " src={image} alt="" />

        {/* Icons Area  */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <div className="absolute top-12 left-6">
            <div className="space-y-3">
              {isHovered ? (
                <>
                  <button
                    className={` tooltip  cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${
                      isHovered
                        ? "bg-yellow-600 text-white pl-1.5"
                        : "bg-white  hover:bg-primary hover:text-white "
                    }`}
                  >
                    <span className="tooltiptext">Alredy Add To Cart </span>
                    <LuShoppingCart />
                  </button>
                </>
              ) : (
                <button
                  className={`pl-1.5 tooltip cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${
                    isHovered
                      ? "bg-yellow-600 text-white"
                      : "bg-white  hover:bg-primary hover:text-white "
                  }`}
                >
                  <span className="tooltiptext">Please Add To Cart </span>
                  <LuShoppingCart
                    onClick={() => {
                      addToCart(_id);
                      setIsHovered(true);
                    }}
                  />
                </button>
              )}

              {/* Eye Icon to open the modal */}

              <button className="bg-white hover:bg-primary hover:text-white cursor-pointer w-8 h-8 rounded-full flex justify-center items-center">
                <FiEye
                  onClick={() => {
                    setModelId(product?._id),
                      document.getElementById("my_modal_3").showModal();
                  }}
                />
              </button>

              {/* Modal */}
              <dialog
                id="my_modal_3"
                className="modal opacity-0 delay-200 scale-95 ease-out duration-500 transform transition-all"
              >
                <div className="modal-box bg-[#ffff] w-11/12 h-[500px] max-w-5xl">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>

                  <div className="flex flex-col md:flex-row gap-2 mt-10">
                    <div className="md:w-1/2 w-full px-3">
                      <img
                        className="rounded-lg h-[370px] w-full"
                        src={reviewData?.image}
                        alt={reviewData?.name}
                      />
                    </div>
                    <div className="md:w-1/2 w-full px-3 md:px-0 text-left">
                      <h2 className="py-1.5 text-2xl font-poppins font-semibold">
                        {reviewData?.name}
                      </h2>
                      <p className="text-gray-500 font-inter font-semibold">
                        {reviewData?.category}
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <span className="px-4 py-1 bg-gray-300 rounded mr-9">
                          In Stock
                        </span>
                        <Rating
                          style={{ maxWidth: 92 }}
                          value={reviewData?.reviews}
                          readOnly
                        />
                        <span> ({reviewData?.reviews} Views) </span>
                      </div>
                      <div className="mt-4">
                        {open ? (
                          <>
                            <p className="text-green-700 text-sm">
                              {reviewData?.description}

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
                              {description?.slice(0, 100)}
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
                        ${reviewData?.price}
                      </p>

                      {/* Quantity and Add to Cart */}
                      <p> Quantity</p>
                      <div className="flex items-center mt-2">
                        <div>
                          <span className="flex gap-4 py-2 px-10 bg-gray-200 rounded space-x-2">
                            <button onClick={() => setCounter(counter - 1)}>
                              <FaMinus className="cursor-pointer" />
                            </button>
                            <p className="font-semibold"> {counter} </p>
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
                      <div className="flex mt-5">
                        <p className="flex items-center gap-3">
                          <VscHeart /> Add Wishlist
                        </p>
                        <p className="flex items-center gap-3 pl-4">
                          <FaClover /> Ask a question
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </dialog>
              {/* wished */}
              <button
                className={`cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${
                  wished
                    ? "bg-yellow-600 text-white"
                    : "bg-white  hover:bg-primary hover:text-white"
                }`}
              >
                <VscHeart
                  onClick={() => {
                    handlerWishList(_id);
                    setWished(true);
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </figure>

      <div className="p-4 text-left">
        <div className="flex items-center justify-between">
          <p> {category}</p>
          <div>
            <Link
              to={`/shopDetails/${_id}`}
              className="btn-sm bg-gray-300 px-4 py-1.5 text-black duration-300 hover:bg-gray-500 hover:text-white rounded-lg"
            >
              Details
            </Link>
          </div>
        </div>
        <h3 className="text-black font-semibold  my-1.5">{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
