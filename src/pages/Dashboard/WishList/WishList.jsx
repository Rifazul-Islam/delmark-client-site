import React from "react";
import useWishList from "../../../hooks/useWishList";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useShops from "../../../hooks/useShops";
import { motion } from "framer-motion";

const WishList = () => {
  const [wishlist, refetched] = useWishList();
  const [, refetch] = useShops();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  // ======= Shoping cart Add ======
  const handlerAddToCart = (reviewData) => {
    let quantities = reviewData?.quantity + 1;
    // console.log(quantities);
    if (user && user?.email) {
      const productInfo = {
        menuId: reviewData?._id,
        name: reviewData?.name,
        email: reviewData?.email,
        price: reviewData?.price,
        quantity: quantities,
        image: reviewData?.image,
      };
      console.log(productInfo);

      axiosSecure.post("/shops", productInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success(`${reviewData?.name} Shopping Completed`, {
            autoClose: 500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are Not Login?",
        text: "Please Login First then Add to Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  // ======= WishList Delete Function ======
  const handlerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wishlist/${id}`).then((res) => {
          //   console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetched();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="my-4">
      <div className="">
        <h2 className="text-4xl font-semibold font-serif my-7"> Wish-List </h2>
      </div>

      {/* Table Use  */}
      <div className="overflow-x-auto mb-20">
        <table className="table border mt-6">
          <thead className="rounded-lg">
            <tr className="text-lg bg-green-200 text-green-800 space-x-8 text-center">
              <th>#</th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Save </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {wishlist?.map((item, index) => (
              <motion.tr
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
              >
                <td> {index + 1} </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-green-300"
                    />
                  </div>
                </td>
                <td>{item?.name}</td>
                <td className="py-4 px-4 text-green-700">
                  ${item?.price.toFixed(2)}
                </td>

                <td className="py-4 px-4">
                  <button
                    onClick={() => handlerDelete(item?._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-accent"
                  >
                    Remove X
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handlerAddToCart(item)}
                    className="btn btn-sm bg-green-500 text-white hover:bg-accent"
                  >
                    Add To Cart
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
