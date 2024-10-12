import React from "react";
import useWishList from "../../../hooks/useWishList";
import { FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useShops from "../../../hooks/useShops";

const WishList = () => {
  const [wishlist, refetched] = useWishList();
  const [, refetch] = useShops();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  // ======= Shoping cart Add ======
  const handlerAddToCart = (reviewData) => {
    if (user && user?.email) {
      const productInfo = {
        menuId: reviewData?._id,
        name: reviewData?.name,
        email: reviewData?.email,
        price: reviewData?.price,
        quantity: reviewData?.quantity,
        image: reviewData?.image,
      };

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
        <h2 className="text-3xl font-semibold font-poppins "> WishList </h2>
      </div>

      {/* Table Use  */}
      <div className="overflow-x-auto mb-20">
        <table className="table border mt-6">
          <thead className="rounded-lg">
            <tr className="text-lg bg-primary text-white">
              <th>#</th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Save </th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item, indx) => (
              <tr key={item._id}>
                <th>
                  <label>{indx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td> {item?.price} </td>
                <th>
                  <button
                    onClick={() => handlerDelete(item?._id)}
                    className="btn btn-ghost btn-lg text-red-700 text-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>

                <td>
                  <button
                    onClick={() => handlerAddToCart(item)}
                    className="btn  bg-primary text-white hover:bg-accent"
                  >
                    Add To Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center p-4">
    //   <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl">
    //     <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
    //       Your Eco-Friendly Cart
    //     </h2>
    //     <div className="overflow-x-auto">
    //       <table className="w-full">
    //         <thead>
    //           <tr className="bg-green-200 text-green-800">
    //             <th className="py-3 px-4 text-left rounded-tl-lg">Product</th>
    //             <th className="py-3 px-4 text-left">Price</th>
    //             <th className="py-3 px-4 text-left">Quantity</th>
    //             <th className="py-3 px-4 text-left rounded-tr-lg">Actions</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {wishlist.map((item, index) => (
    //             <motion.tr
    //               key={item.id}
    //               initial={{ opacity: 0, y: 20 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               exit={{ opacity: 0, y: -20 }}
    //               className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
    //             >
    //               <td className="py-4 px-4">
    //                 <div className="flex items-center space-x-4">
    //                   <img
    //                     src={item.image}
    //                     alt={item.name}
    //                     className="w-16 h-16 rounded-full object-cover border-2 border-green-300"
    //                   />
    //                   <span className="font-semibold text-green-800">
    //                     {item.name}
    //                   </span>
    //                 </div>
    //               </td>
    //               <td className="py-4 px-4 text-green-700">
    //                 ${item.price.toFixed(2)}
    //               </td>
    //               <td className="py-4 px-4">
    //                 <div className="flex items-center space-x-2">
    //                   <button
    //                     onClick={() => updateQuantity(item.id, -1)}
    //                     className="p-1 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition-colors"
    //                   >
    //                     <FiMinus />
    //                   </button>
    //                   <span className="font-bold text-green-800 w-8 text-center">
    //                     0
    //                   </span>
    //                   <button
    //                     onClick={() => updateQuantity(item.id, 1)}
    //                     className="p-1 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition-colors"
    //                   >
    //                     <FiPlus />
    //                   </button>
    //                 </div>
    //               </td>
    //               <td className="py-4 px-4">
    //                 <button
    //                   onClick={() => updateQuantity(item.id, -item.quantity)}
    //                   className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
    //                 >
    //                   <FiTrash2 />
    //                 </button>
    //               </td>
    //             </motion.tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //     <div className="mt-8 flex items-center justify-between">
    //       <div>
    //         {/* <p className="text-xl font-semibold text-green-800">
    //           Total Items: {totalItems}
    //         </p> */}
    //         <p className="text-2xl font-bold text-green-900">
    //           {/* ${totalPrice.toFixed(2)} */}
    //         </p>
    //       </div>
    //       <button className="px-6 py-3 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 shadow-lg">
    //         <FiShoppingCart />
    //         <span>Checkout</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default WishList;
