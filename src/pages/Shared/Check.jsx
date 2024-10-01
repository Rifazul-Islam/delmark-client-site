import React, { useState } from "react";
import useCart from "../../hooks/useCart";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Check = () => {
  const [cart, refetch] = useCart();
  const [statOne, setStatOne] = useState(0);
  const axiosSecure = useAxiosSecure();

  const handlarCounter = (id) => {
    if (id) {
      setStatOne(statOne - 1);
    }
  };

  const handlarIncrement = (id) => {
    console.log(id);
    if (id) {
      setStatOne(statOne + 1);
    }
  };

  const handlerDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      console.log(res?.data);
      refetch();
    });
  };

  return (
    <table className="text-sm  mt-4 mx-4">
      <thead>
        <tr className="border-b space-x-3 ">
          <th className="text-left font-semibold">Product</th>

          <th className="text-left font-semibold">Price</th>
          <th className="text-left font-semibold">Quantity</th>
          <th className="text-left font-semibold">Delete</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item._id} className="border-b">
            <td className="py-4">
              <div className="flex items-center">
                <img
                  className="h-16 w-12 mr-4"
                  src={item.image}
                  alt={item.name}
                />
                <span className="font-semibold">{item.name}</span>
              </div>
            </td>
            <td className="py-4 pr-2">${item.price.toFixed(2)}</td>

            <td className="py-4">
              <div className="flex items-center">
                <button onClick={() => handlarCounter(item._id)}>
                  <FiMinus />
                </button>
                <span className="text-gray-700 mx-2">{statOne}</span>
                <button
                  onClick={() => handlarIncrement(item._id)}
                  className="text-gray-500 focus:outline-none focus:text-gray-600"
                >
                  <FiPlus />
                </button>
              </div>
            </td>

            <td className="py-4">
              <button
                onClick={() => handlerDelete(item._id)}
                className="text-red-500 focus:outline-none focus:text-red-600"
              >
                <FiTrash2 />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Check;
