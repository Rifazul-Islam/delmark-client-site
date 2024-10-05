import {
  FaAd,
  FaBook,
  FaCalculator,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex lg:flex-row flex-col mt-3 mb-1 pl-1 pr-3">
      {/* dashboard site bar */}
      <div className="lg:w-60 bg-gray-50 min-h-screen  shadow-2xl rounded-lg p-4 border">
        {isAdmin ? (
          <h2 className="text-xl font-semibold mb-4 pl-5">Admin Dashboard</h2>
        ) : (
          <h2 className="text-xl font-semibold mb-4 pl-5">User Dashboard</h2>
        )}

        <ul className="text-center mt-4 menu space-y-3">
          {/* First Admin Role show nav Link */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList /> Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook /> manage Booking
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUser />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalculator />
                  ReserVation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/reviews">
                  <FaShoppingCart /> Reviews
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/booking">
                  <FaAd />
                  My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"> </div>

          {/* Share Link Menu */}
          <>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaSearch /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/contact">
                <MdEmail /> Contact
              </NavLink>
            </li>
          </>
        </ul>
      </div>
      {/* dashboard Outlet  */}
      <div className="flex-1 border-[1px] rounded-md mx-4 p-4 lg:mt-0 mt-8 shadow-lg  bg-gray-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
