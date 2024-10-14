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
        <div className="space-y-1">
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
              to="/dashboard/bookings"
            >
              <FaBook /> manage Booking
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
        <>
          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/userHome"
            >
              <FaHome /> User Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center gap-2 "
              to="/dashboard/reservation"
            >
              <FaCalculator />
              ReserVation
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
        </>
      )}

      <div className="divider"> </div>

      {/* Share Link Menu */}
      <>
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
      </>
    </>
  );
  return (
    // <div className="flex lg:flex-row flex-col mt-3 mb-1 pl-1 pr-3">
    //   {/* dashboard site bar */}
    //   <div className="lg:w-60 bg-white rounded-lg shadow-2xl min-h-screen p-4 border">
    //     {isAdmin ? (
    //       <h2 className="text-xl font-semibold mb-4 pl-5">Admin Dashboard</h2>
    //     ) : (
    //       <h2 className="text-xl font-semibold mb-4 pl-5">User Dashboard</h2>
    //     )}

    //     <ul className="text-center mt-4 menu space-y-3">{dashboardItems}</ul>
    //   </div>
    //   {/* dashboard Outlet  */}
    //   <div className="flex-1 border-[1px]  mx-4 p-4 lg:mt-0 mt-8 bg-white rounded-lg shadow-2xl">
    //     <Outlet></Outlet>
    //   </div>
    // </div>

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
            <ul className="menu p-4 min-h-full bg-base-200 text-base-content">
              {dashboardItems}
            </ul>
          </div>
        </div>

        <div className="col-span-1 hidden md:grid border-[1px]  mx-4 p-4 lg:mt-0 mt-8 bg-white rounded-lg shadow-2xl">
          <div>
            {/* <div>
              <Link to="/" className={`${showLogo ? "block" : "hidden"}`}>
                <img src={logo} className="w-3/4 h-12" alt="" />
              </Link>
              <Link to="/" className={`${showLogo ? "hidden" : "block"}`}>
                <img src={goToHome} className="w-3/4 h-12" alt="" />
              </Link>
            </div> */}
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
