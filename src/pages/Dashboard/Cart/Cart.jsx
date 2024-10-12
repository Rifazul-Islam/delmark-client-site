import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useShops from "../../../hooks/useShops";
import { motion } from "framer-motion";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

const Cart = () => {
  const [shops, refetch] = useShops();
  const axiosSecure = useAxiosSecure();
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Qunatity Increment and Decrement Function Use Start Poin ========
  // Increament Function
  const handlarIncrement = (item) => {
    const { quantity } = item;
    item.quantity += 1;
    setCurrentQuantity(item.quantity);
    // Increment the quantity
    const updatedQuantity = quantity + 1;

    const update = {
      quantity: updatedQuantity, // Set the updated quantity here
    };

    axiosSecure
      .put(`/shops/${item._id}`, update)
      .then((res) => {
        toast.success("Quantity Update", { autoClose: 500 });
        refetch();
      })
      .catch((err) => {
        console.error("Error updating the cart:", err);
      });
  };

  // decrement  Function
  const handlarDecrement = (item) => {
    const { quantity } = item;
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCurrentQuantity(item.quantity); // Update current quantity
      // Add your logic for making the update API request here...
    }
    // Increment the quantity
    const updatedQuantity = quantity - 1;

    const update = {
      quantity: updatedQuantity, // Set the updated quantity here
    };

    axiosSecure
      .put(`/shops/${item._id}`, update)
      .then((res) => {
        toast.error("Remove A Quantity", { autoClose: 500 });
        refetch();
      })
      .catch((err) => {
        console.error("Error updating the cart:", err);
      });
  };
  // Qunatity Increment and Decrement Function Use End Poin ========

  // Specific Cart Delete Method under Hoot

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
        axiosSecure.delete(`/shops/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
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

  // Total Price Get

  useEffect(() => {
    const price = shops?.reduce(
      (pro, current) => pro + current?.price * current?.quantity,
      0
    );

    setTotalPrice(price?.toFixed(2));
  }, [shops, currentQuantity]);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">
          Total Items : {shops?.length}
        </h2>
        <h2 className="text-2xl font-semibold">
          {" "}
          Total Price : {totalPrice || 0}{" "}
        </h2>
        {shops?.length ? (
          <Link to="/dashboard/payment">
            <button className="text-lg btn bg-accent px-8 text-white">
              Pay
            </button>
          </Link>
        ) : (
          <button disabled className="text-lg btn bg-accent px-8 text-white">
            Pay
          </button>
        )}
      </div>

      {/* Table Use  */}
      <div className="overflow-x-auto">
        <table className="table border mt-6">
          <thead className="rounded-lg">
            <tr className="text-lg bg-green-200 text-green-800">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">image</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {shops?.map((item, index) => (
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
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handlarDecrement(item)}
                      className="p-1 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition-colors"
                    >
                      <FiMinus />
                    </button>
                    <span className="font-bold text-green-800 w-8 text-center">
                      {item?.quantity}
                    </span>
                    <button
                      onClick={() => handlarIncrement(item)}
                      className="p-1 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition-colors"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => handlerDelete(item._id)}
                    className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <FiTrash2 />
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

export default Cart;
