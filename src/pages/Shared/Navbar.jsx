import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { userLogout, user } = useContext(AuthContext);

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
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/menu"> Menu</Link>
      </li>
      <li>
        <Link to="/order/salad"> Order </Link>
      </li>
      <li>
        <Link to="/secret"> Secret </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-base-100 border">
      <div className="navbar max-w-6xl mx-auto">
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
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <a className="text-2xl font-bold text-blue-500 ">
            <span className="text-yellow-400">Dal</span>Mart
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={handlerLogout}
                className="btn btn-md px-8  mt-1.5"
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
