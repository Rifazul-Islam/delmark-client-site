import React from "react";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const price = cart.reduce((pro, current) => pro + current.price, 0);
  const totalPrice = price.toFixed(2);
  const axiosSecure = useAxiosSecure();
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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

  return (
    <div>
      <div className="flex justify-between ">
        <h2 className="text-2xl font-semibold">Total Items : {cart.length}</h2>
        <h2 className="text-2xl font-semibold"> Total Price : {totalPrice} </h2>
        {cart?.length ? (
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
            <tr className="text-lg bg-primary text-white">
              <th>#</th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, indx) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
