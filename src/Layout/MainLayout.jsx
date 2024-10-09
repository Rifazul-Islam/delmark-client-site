import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const MainLayout = () => {
  const location = useLocation();
  const [cart, refetch] = useCart();
  const [show, setShow] = useState(false);
  const axiosSecure = useAxiosSecure();
  const noNavberFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");

  const totalPrice = cart.reduce((pro, current) => pro + current.price, 0);

  const handlerDelete = (item) => {
    axiosSecure.delete(`/carts/${item._id}`).then((res) => {
      // console.log(res?.data);
      refetch();
      toast.error(`${item?.name} remove from cart`, {
        position: "top-center",
      });
    });
  };

  return (
    <div className="relative z-10">
      {noNavberFooter || <Navbar></Navbar>}
      {noNavberFooter || (
        <div className="fixed top-4 right-28 z-20 p-3 ">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button text-black">
                <div className="cursor-pointer">
                  <FaShoppingCart className="text-xl" />
                  <div className="absolute badge-secondary flex justify-center items-center right-0 w-5 h-5 -top-4 left-4  rounded-full">
                    {cart?.length}
                  </div>
                </div>
              </label>
            </div>

            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="menu bg-[#FFFFFF]  relative text-base-content min-h-full min-w-72  p-4">
                {/* Sidebar content here */}
                <div className="flex px-2 justify-between w-full border-b-2 pb-3">
                  <h2 className="font-semibold font-poppins text-[17px]">
                    Shopping Cart
                  </h2>
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="text-black drawer-overlay font-bold text-lg cursor-pointer"
                  >
                    X
                  </label>
                </div>
                {cart?.length > 0 ? (
                  <>
                    <table className="text-sm overflow-y  mt-4 mx-4">
                      <tbody>
                        {cart.map((item) => (
                          <tr
                            key={item._id}
                            className="border-b text-black font-semibold z-10"
                          >
                            <td className="py-4">
                              <div className="flex items-center">
                                <img
                                  className="h-16 w-12 mr-4"
                                  src={item.image}
                                  alt={item.name}
                                />
                              </div>
                            </td>
                            <td className="py-4 pr-2">
                              <span className="font-semibold block">
                                {item.name}
                              </span>
                              <p className="text-gray-500">
                                ${item.price.toFixed(2)}
                              </p>
                            </td>
                            <td>
                              <button
                                onClick={() => handlerDelete(item)}
                                className="text-red-500 btn  focus:outline-none hover:text-red-800 focus:text-red-600"
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <p className="flex items-center mt-28 justify-center ">
                      <img
                        className="w-28"
                        src="https://cdn-icons-png.flaticon.com/512/6445/6445100.png"
                        alt=""
                      />
                    </p>
                  </>
                )}

                <div className="z-30 fixed bg-[#ffffff] w-full  border-t-[2px] pr-10 border-gray-200 bottom-0  mx-4   font-bold text-xl  text-center mb-1  p-4">
                  <div className="flex justify-between w-52">
                    <p className="text-gray-700"> Total Price </p>
                    <p className="text-gray-500"> $ {totalPrice.toFixed(2)}</p>
                  </div>

                  <div className="my-10  z-20 bg-[#ffffff] space-y-3 ">
                    <Link to="/dashboard/cart">
                      <button className="btn btn-sm hover:bg-accent  bg-primary w-52 hover:text-black text-white">
                        View Cart
                      </button>
                    </Link>
                    <Link to="/dashboard/payment">
                      <button className="btn btn-sm bg-primary hover:bg-accent  rounded-lg w-52 hover:text-black text-white">
                        CheckOut
                      </button>
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        <Outlet> </Outlet>
      </div>
      {noNavberFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
