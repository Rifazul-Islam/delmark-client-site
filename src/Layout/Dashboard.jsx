import {
  FaAd,
  FaBook,
  FaCalculator,
  FaHome,
  FaList,
  FaMapMarkedAlt,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { HiBars3BottomRight } from "react-icons/hi2";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const dashboardItems = (
    <>
      {isAdmin ? (
        <div className="space-y-3">
          <div>
            <h2 className="text-[19px] font-serif  font-bold  mb-3 flex gap-3 items-center text-primary">
              <FaMapMarkedAlt /> DelMark
            </h2>
          </div>
          <li>
            <NavLink
              className="flex items-center gap-2"
              to="/dashboard/adminHome"
            >
              <FaHome /> Admin Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/addItems"
            >
              <FaUtensils />
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/manageItems"
            >
              <FaList /> Manage Items
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/orderManage"
            >
              <FaBook /> Order manage
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/allUsers"
            >
              <FaUser />
              All Users
            </NavLink>
          </li>
        </div>
      ) : (
        <div className="space-y-3">
          <li>
            <NavLink
              className="flex items-center gap-2 text-primary font-inter font-semibold"
              to="/dashboard/userHome"
            >
              <FaHome /> User Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/MyProfile"
            >
              <FaCalculator />
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-2 " to="/dashboard/cart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/reviews"
            >
              <FaShoppingCart /> Reviews
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/paymentHistory"
            >
              <FaAd />
              Payment History
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/paymentHistory"
            >
              <FaAd />
              Support
            </NavLink>
          </li>
        </div>
      )}

      <div className="divider"> </div>

      {/* Share Link Menu */}
      <div className=" space-y-3">
        <li>
          <NavLink className="flex items-center gap-2 " to="/">
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-2 " to="/order/salad">
            <FaSearch /> Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-2 " to="/order/contact">
            <MdEmail /> Contact
          </NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div className="bg-[#f5f5fb] w-max-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div className="drawer drawer-start lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-white rounded-xl flex justify-between mt-1 items-center p-3 py-4 mx-3 border">
            <Link to="/">
              <h2 className="text-[22px] font-serif  font-bold   flex gap-3 items-center text-primary">
                <FaMapMarkedAlt /> DelMark
              </h2>
            </Link>
            <label
              htmlFor="my-drawer-4"
              className="drawer-button hover:cursor-pointer text-primary"
            >
              <HiBars3BottomRight className="text-2xl" />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 min-h-full w-72 bg-base-200 text-base-content">
              {dashboardItems}
            </ul>
          </div>
        </div>

        <div className="col-span-1 hidden md:grid border-[1px]  mx-4 p-4 lg:mt-0 mt-8 bg-white rounded-lg shadow-2xl">
          <div>
            <ul>{dashboardItems}</ul>
          </div>
        </div>

        <div className="grid col-span-5 border-[1px] overflow-hidden mr-3 p-4 mt-2 lg:mt-0 md:mt-8 bg-white rounded-lg shadow-2xl min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
