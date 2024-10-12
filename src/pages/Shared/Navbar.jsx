import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Check from "./Check";
import useAdmin from "../../hooks/useAdmin";
import { CgProfile } from "react-icons/cg";
import { div } from "framer-motion/client";
import { VscHeart } from "react-icons/vsc";
import useWishList from "../../hooks/useWishList";

const Navbar = () => {
  const { userLogout, user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const [open, setOpen] = useState(false);
  let [wishlist] = useWishList();

  const handlerLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          title: "User LogOut Successfully",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
      })
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <>
      <Link to="/"> Home</Link>

      <Link to="/menu"> Menu</Link>

      <Link to="/order/salad"> Order </Link>

      <Link to="/secret"> Secret </Link>

      {/* <div className="relative">
        <div className="cursor-pointer" onClick={() => setShow(!show)}>
          <FaShoppingCart className="text-xl" />
          <div className="badge absolute  badge-secondary w-4 h-4 -top-1.5 left-4  rounded-full">
            {cart?.length}
          </div>
        </div>
        {show && (
          <div>
            <h4> Hello </h4>
          </div>
          // <div className="bg-base-100 pt-1.5 absolute top-11 shadow-lg left-36 w-[350px] border-2 min-h-screen">
          //   <div className="flex px-2 justify-between ">
          //     <h2 className="font-bold font-poppins"> Shopping Show </h2>
          //     <p onClick={() => setShow(!show)} className="text-accent">
          //       X
          //     </p>
          //   </div>
          //   <Check />
          // </div>
        )}
      </div> */}
    </>
  );

  return (
    <div className="pb-[72px] font-poppins  font-semibold text-primary">
      <div className="navbar bg-base-100 shadow-lg  mx-auto fixed z-20  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-green-950 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <a className="text-2xl font-bold text-blue-500 ml-12 ">
            <span className="text-yellow-400">Dal</span>Mark
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 S text-[16px] space-x-4">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/wishlist"
            className="mx-4 mr-5 relative mt-3 bg-green-50 w-9 h-9 rounded-full flex justify-center items-center border-2"
          >
            <VscHeart className="text-xl" />

            <div className="absolute bg-green-800 text-white flex justify-center items-center right-0 w-5 h-5 -top-4 left-6  rounded-full">
              {wishlist?.length}
            </div>
          </Link>
          {user ? (
            <>
              <div
                onClick={() => setOpen(!open)}
                title={user?.email}
                className="relative mr-8 cursor-pointer"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />

                {open ? (
                  <>
                    <div className="bg-base-100 border-[1px] border-gray-300 flex flex-col justify-center space-y-1.5  text-sm  p-1.5 w-40  absolute top-12 right-0 shadow-2xl -mr-9">
                      <button className="bg-gray-200  hover:bg-gray-300 rounded-lg py-1.5">
                        {user && isAdmin && (
                          <Link to="/dashboard/adminHome"> Dashboard</Link>
                        )}
                        {user && !isAdmin && (
                          <Link to="/dashboard/userHome"> Dashboard</Link>
                        )}
                      </button>

                      <button
                        onClick={handlerLogout}
                        className="bg-gray-200  hover:bg-gray-300 rounded-lg py-1.5"
                      >
                        Sigin Out
                      </button>
                      <button className="bg-gray-200  hover:bg-gray-300 rounded-lg py-1.5">
                        Setting
                      </button>
                    </div>
                  </>
                ) : (
                  " "
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className=" px-8 text-3xl ">
                <CgProfile />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
