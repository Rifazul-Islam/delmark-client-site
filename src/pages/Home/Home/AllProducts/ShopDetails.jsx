import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import {
  FaFacebook,
  FaHandRock,
  FaHardHat,
  FaLinkedin,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { FaClover, FaSquareXTwitter } from "react-icons/fa6";
import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
const ShopDetails = () => {
  const datas = useLoaderData();
  const { name, description, image, price, category, reviews, quantity, _id } =
    datas;
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handlerAddToCart = () => {
    if (user && user?.email) {
      const productInfo = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
        quantity,
      };

      axiosSecure.post("/shops", productInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success(`${name}, Shoping Completed`, { autoClose: 500 });
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
    <div className="flex flex-col md:flex-row  gap-6 my-16">
      <div className="md:w-1/2 w-full px-3 md:px-0">
        <img className="rounded-lg h-[550px] w-full" src={image} alt="" />
      </div>
      <div className="md:w-1/2 w-full px-3 md:px-0">
        <div>
          <span className="text-gray-500 font-inter font-semibold">
            {category}
          </span>
          <h2 className="py-1.5 text-2xl font-poppins font-semibold">{name}</h2>
          <div className="flex items-center gap-4 mt-4">
            <span className="px-4 py-1 bg-gray-300 rounded mr-9">In Stock</span>
            <Rating style={{ maxWidth: 92 }} value={reviews} readOnly />
            <span> ({reviews} Views) </span>
          </div>
          {/* Description Area */}
          <div className="mt-4">
            {open ? (
              <>
                <p className="text-green-700 text-sm">
                  {description}

                  <span
                    className=" cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    See Less
                  </span>
                </p>
              </>
            ) : (
              <>
                <p className="text-green-700 text-sm">
                  {description.slice(0, 100)}
                  <span
                    className=" cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    ...See more
                  </span>
                </p>
              </>
            )}
          </div>
          <p className="text-2xl font-bold font-poppins py-3"> ${price}</p>

          {/* quantity Increatem System and Adto cart */}
          <p> Quantity</p>
          <div className="flex  items-center mt-2">
            <div>
              <span className="flex  gap-4 py-2 px-10 bg-gray-200  rounded mr-9 space-x-2">
                {counter === 1 ? (
                  <>
                    <FaMinus className="mt-1.5 " />
                  </>
                ) : (
                  <>
                    <button onClick={() => setCounter(counter - 1)}>
                      <FaMinus className="cursor-pointer" />
                    </button>
                  </>
                )}

                <p className="font-semibold"> {counter}</p>
                <button onClick={() => setCounter(counter + 1)}>
                  <FaPlus className="cursor-pointer" />
                </button>
              </span>
            </div>
            <div onClick={handlerAddToCart}>
              <button className="btn px-24 bg-primary text-white hover:bg-accent">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="border-b-[1px] pb-2 flex my-10">
            <p className="flex items-center gap-3">
              <span>
                <FaHandRock />
              </span>
              Add Wishlist
            </p>
            <p className="flex items-center gap-3 pl-4">
              <span>
                <FaClover />
              </span>
              Ask a question
            </p>
          </div>

          <p className="text-sm text-[14px]"> Category : {category} </p>

          {/* Share Icons  */}
          <div className="pt-2">
            <p className="font-semibold flex items-center gap-4 text-2xl ">
              Share : <FaFacebook className="text-3xl text-blue-600" />
              <FaSquareXTwitter className="text-3xl text-indigo-500" />
              <FaLinkedin className="text-3xl text-[#0077B5]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
