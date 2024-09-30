import React from "react";
import {
  FaAd,
  FaCalculator,
  FaHome,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex lg:flex-row flex-col my-3 lg:px-20">
      {/* dashboard site bar */}
      <div className="lg:w-64  min-h-screen bg-base-100 shadow-2xl rounded-lg p-4 border">
        <h2 className="text-xl font-semibold mb-4 pl-5">Dashboard</h2>

        <ul className="text-center mt-4 menu space-y-3">
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

          <div className="divider"> </div>
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
        </ul>
      </div>
      {/* dashboard Outlet  */}
      <div className="flex-1 border-2 mx-4 p-4 lg:mt-0 mt-8 shadow-lg">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
