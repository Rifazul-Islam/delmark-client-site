import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useShops from "../hooks/useShops";
import { VscHeart } from "react-icons/vsc";
import "./MainLayout.css";
import useAdmin from "../hooks/useAdmin";
const MainLayout = () => {
  const location = useLocation();
  const [shops, refetch] = useShops();
  const [show, setShow] = useState(false);
  const axiosSecure = useAxiosSecure();
  const noNavberFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");

  const totalPrice = shops?.reduce((pro, current) => pro + current.price, 0);

  const handlerDelete = (item) => {
    axiosSecure.delete(`/shops/${item._id}`).then((res) => {
      // console.log(res?.data);
      if (res.data?.deletedCount > 0) {
        refetch();
        toast.error(`${item?.name} remove from cart`, {
          position: "top-center",
          autoClose: 500,
        });
      } else {
        toast.error("Some Thing wrong");
      }
    });
  };

  // console.log(shops);
  const [isAdmin] = useAdmin();
  return (
    <div className="relative z-10">
      {noNavberFooter || <Navbar></Navbar>}
      {noNavberFooter || (
        <div>
          {isAdmin ? (
            " "
          ) : (
            <>
              <div className="fixed top-2 right-36 z-20 p-3">
                <div className="drawer drawer-end">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />

                  <div className="drawer-content">
                    {/* Page content here */}
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button text-black"
                    >
                      <div className="cursor-pointer">
                        <p className=" bg-green-50 w-9 h-9 rounded-full flex justify-center items-center border-2">
                          <FaShoppingCart className="text-xl text-primary" />
                        </p>

                        <div className="absolute bg-green-800 text-white flex justify-center items-center right-0 w-5 h-5 -top-4 left-6  rounded-full">
                          {shops?.length || 0}
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

                    <ul className="menu bg-[#FFFFFF] relative text-base-content min-h-full min-w-72 p-4">
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

                      {shops?.length > 0 ? (
                        <>
                          <div
                            className="overflow-y-auto mt-4 mx-2 custom-scrollbar"
                            style={{
                              maxHeight: "calc(100vh - 200px)",
                              backgroundColor: "#F8F9FA",
                            }}
                          >
                            <table className="text-sm w-full">
                              <tbody>
                                {shops.map((item) => (
                                  <tr
                                    key={item._id}
                                    className="border-b text-black font-semibold"
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
                                      {totalPrice && (
                                        <p className="text-gray-500">
                                          $ {totalPrice?.toFixed(2)}
                                        </p>
                                      )}
                                    </td>
                                    <td>
                                      <button
                                        onClick={() => handlerDelete(item)}
                                        className="text-red-500 btn focus:outline-none hover:text-red-800 focus:text-red-600"
                                      >
                                        X
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center mt-28 justify-center">
                          <img
                            className="w-28"
                            src="https://cdn-icons-png.flaticon.com/512/6445/6445100.png"
                            alt=""
                          />
                        </div>
                      )}

                      <div className="z-30 fixed bottom-0 left-0 w-full bg-[#ffffff] border-t-2 border-gray-200 p-4">
                        <div className="flex justify-between w-52 mx-auto">
                          <p className="text-gray-800 text-lg font-serif font-semibold">
                            Total Price
                          </p>
                          {totalPrice && (
                            <p className="text-gray-800 text-lg font-inter font-semibold">
                              $ {totalPrice?.toFixed(2)}
                            </p>
                          )}
                        </div>

                        <div className="my-4  text-center">
                          <Link to="/dashboard/cart">
                            <button className="btn btn-sm mb-2 hover:bg-accent bg-primary md:w-72 hover:text-black text-white">
                              View Cart
                            </button>
                          </Link>
                          <Link to="/dashboard/payment">
                            <button className="btn btn-sm md:w-72 bg-primary hover:bg-accent rounded-lg  hover:text-black text-white">
                              CheckOut
                            </button>
                          </Link>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>{" "}
            </>
          )}
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
