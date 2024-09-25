import React, { useState } from "react";
import OrderCard from "../Order/OrderCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const OrderTab = ({ orders }) => {
  const totalData = orders.length;

  const totalpage = totalData / 6;
  const result = Math.ceil(totalpage);

  const pagination = {
    clickable: true,
    renderBullet: function (result, className) {
      return '<span class="' + className + '">' + (result + 1) + "</span>";
    },
  };

  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10">
          {orders.slice(0, 5).map((items) => (
            <OrderCard items={items} key={items._id} />
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;
