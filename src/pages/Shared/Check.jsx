import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Check = () => {
  const [cart, refetch] = useCart();
  const [currentQ, setCurrentQ] = useState(1);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0); // Track total price

  const handlarDecrement = (item) => {
    const { name, image, recipe, _id, price, quantity } = item;
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCurrentQ(item.quantity); // Update current quantity
      // Add your logic for making the update API request here...
    }
    // Increment the quantity
    const updatedQuantity = quantity - 1;

    const update = {
      menuId: _id,
      email: user?.email, // Make sure the `user` object is defined
      name,
      recipe,
      image,
      price,
      quantity: updatedQuantity, // Set the updated quantity here
    };

    axiosSecure
      .put(`/carts/${item._id}`, update)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((err) => {
        console.error("Error updating the cart:", err);
      });
  };

  const handlarIncrement = (item) => {
    const { name, image, recipe, _id, price, quantity } = item;
    item.quantity += 1;
    setCurrentQ(item.quantity);
    // Increment the quantity
    const updatedQuantity = quantity + 1;

    const update = {
      menuId: _id,
      email: user?.email, // Make sure the `user` object is defined
      name,
      recipe,
      image,
      price,
      quantity: updatedQuantity, // Set the updated quantity here
    };

    axiosSecure
      .put(`/carts/${item._id}`, update)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((err) => {
        console.error("Error updating the cart:", err);
      });
  };
  // order delete Function Created

  const handlerDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      // console.log(res?.data);
      refetch();
    });
  };

  //  reduce method use

  useEffect(() => {
    const price = cart?.reduce(
      (pro, current) => pro + current?.price * current?.quantity,
      0
    ); // Calculate price * quantity for each item
    setTotalPrice(price.toFixed(2)); // Set the total price with two decimal points
  }, [cart, currentQ]); // Dependency array includes cart and currentQ

  return (
    <div className="relative">
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
                  {item?.quantity === 0 ? (
                    <>
                      <button
                        disabled
                        onClick={() => {
                          handlarDecrement(item);
                          handlarDecremen(item);
                        }}
                      >
                        <FiMinus />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handlarDecrement(item);
                        }}
                      >
                        <FiMinus />
                      </button>
                    </>
                  )}
                  <span className="text-gray-700 mx-2">{item.quantity}</span>
                  <button
                    onClick={() => {
                      handlarIncrement(item);
                      handlarIncremen(item);
                    }}
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

      <div className="badge-secondary fixed bottom-0  mx-4 w-80 rounded-lg font-bold text-2xl text-white  text-center mb-1  p-4">
        <h2> Total Price : $ {totalPrice} </h2>
      </div>
    </div>
  );
};

export default Check;
