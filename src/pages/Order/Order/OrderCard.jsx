import React from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const OrderCard = ({ items }) => {
  const { name, image, recipe, _id, price } = items;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handlerAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} add cart`,
            showConfirmButton: false,
            timer: 1500,
          });

          // tanStack Queary use Refetch

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
  return (
    <>
      {/* 01 */}
      <div className="card  p-1.5 card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56 " src={image} alt="" />
        </figure>
        <div className="p-4 text-center">
          <h3 className="text-black font-semibold text-2xl mt-1.5">{name}</h3>
          <p className="text-sm py-3 pb-5">{recipe}</p>
          <div onClick={handlerAddToCart} className="overflow-hidden">
            <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
