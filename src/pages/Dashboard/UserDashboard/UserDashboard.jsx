import React, { useState } from "react";
import {
  FiShoppingCart,
  FiTruck,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";
import { GiCarrot, GiTomato, GiBroccoli, GiPotato } from "react-icons/gi";
import useAuth from "../../../hooks/useAuth";
import useShops from "../../../hooks/useShops";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import usePayments from "../../../hooks/usePayments";

const UserDashboard = () => {
  const [payments, refetch] = usePayments();
  const { user } = useAuth();

  const recentOrders = [
    {
      id: "#12345",
      items: "Carrots, Tomatoes, Broccoli",
      total: "$25.99",
      status: "Delivered",
    },
    {
      id: "#12346",
      items: "Potatoes, Onions",
      total: "$18.50",
      status: "Processing",
    },
    {
      id: "#12347",
      items: "Spinach, Kale, Cucumber",
      total: "$22.75",
      status: "Pending",
    },
  ];

  const promotions = [
    { title: "Summer Veggie Bundle", discount: "20% off", code: "SUMMER20" },
    { title: "Free Delivery", condition: "Orders over $50", code: "FREEDEL50" },
  ];

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className=" text-2xl md:text-3xl font-bold text-green-800">
            Dashboard Home
          </h1>
          <div className="flex items-center space-x-4">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-12 h-12 rounded-full"
            />
            <span className="font-semibold text-green-700">
              {user?.displayName}
            </span>
          </div>
        </header>

        {/* Order Statistics */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-xl border p-6">
            <div className="flex items-center justify-between ">
              <div>
                <p className="text-gray-500">Total Orders</p>
                <h2 className="text-3xl font-bold text-green-600">
                  {payments?.length}
                </h2>
              </div>
              <FiShoppingCart className="text-4xl text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl border  p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Delivered</p>
                <h2 className="text-3xl font-bold text-blue-600">0</h2>
              </div>
              <FiTruck className="text-4xl text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Pending</p>
                <h2 className="text-3xl font-bold text-yellow-600">
                  {payments?.length}
                </h2>
              </div>
              <FiClock className="text-4xl text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Cancelled</p>
                <h2 className="text-3xl font-bold text-red-600">2</h2>
              </div>
              <FiAlertCircle className="text-4xl text-red-500" />
            </div>
          </div>
        </div>

        {/* Recent Orders and Promotions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 shadow-2xl border-2">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Recent Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="pb-2">Order ID</th>
                    <th className="pb-2">Items</th>
                    <th className="pb-2">Total</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments?.map((order, index) => (
                    <tr key={order._id} className="border-b">
                      <td className="py-2"> {542 + index} </td>
                      <td className="py-2">New Products</td>
                      <td className="py-2">{order?.price}</td>
                      <td className="py-2">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            order.status === "Delivered"
                              ? "bg-green-200 text-green-800"
                              : order.status === "Processing"
                              ? "bg-blue-200 text-blue-800"
                              : "bg-yellow-200 text-yellow-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Ongoing Promotions
            </h2>
            {promotions.map((promo, index) => (
              <div key={index} className="mb-4 p-4 bg-green-100 rounded-lg">
                <h3 className="font-semibold text-green-700">{promo.title}</h3>
                <p className="text-green-600">
                  {promo.discount || promo.condition}
                </p>
                <p className="text-sm text-green-500">
                  Use code: <span className="font-mono">{promo.code}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
