import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { userLogout, user } = useContext(AuthContext);

  const [cart] = useCart();

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
      {user?.email && <Link to="/dashboard"> Dashboard</Link>}

      <button className="btn btn-xs mt-1 text-lg">
        <FaShoppingCart />
        <div className="badge badge-secondary">+ {cart?.length}</div>
      </button>
    </>
  );

  return (
    <div className=" pb-[72px] ">
      <div className="navbar bg-green-950  mx-auto fixed z-20 text-white">
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
          <a className="text-2xl font-bold text-blue-500 ">
            <span className="text-yellow-400">Dal</span>Mart
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-lg space-x-4">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={handlerLogout}
                className="btn btn-md px-8  mt-1.5 bg-second  hover:bg-accent"
              >
                SignOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-md px-8">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
