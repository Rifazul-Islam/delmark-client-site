import React from "react";
import useWishList from "../../../hooks/useWishList";
import { FaTrashAlt } from "react-icons/fa";

const WishList = () => {
  const [wishlist, refetch] = useWishList();

  const handlerAddToCart = (items) => {
    console.log(items);
  };

  const handlerDelete = (id) => {
    console.log(id);
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
  );
};

export default WishList;
