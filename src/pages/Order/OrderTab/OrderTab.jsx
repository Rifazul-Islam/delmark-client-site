import React from "react";
import OrderCard from "../Order/OrderCard";

const OrderTab = ({ orders }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {orders.map((items) => (
        <OrderCard items={items} key={items._id} />
      ))}
    </div>
  );
};

export default OrderTab;
