import React, { useEffect, useState } from "react";
import SelectTitle from "../../../../components/SelectTitle";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  const [allReview, setAllReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setAllReview(data));
  }, []);

  // console.log(allReview);

  return (
    <div className="mt-20 ">
      <SelectTitle subTitle={"What Our Client Say"} title={"Testimonials"} />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {allReview.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="p-4 flex  justify-center items-center">
              <div>
                {/* reviews icons */}
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                  />
                </div>

                {/* Quats Icons */}
                <div className="flex justify-center py-4 text-4xl">
                  <ImQuotesLeft />
                </div>

                <p className="md:w-[800px] md:mx-auto py-4 md:text-md text-sm mx-6">
                  {item?.details}
                </p>
                <h3 className="text-orange-500 text-3xl"> {item?.name} </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-16">
        <img src="https://sunny-footwear.vercel.app/payment.webp" alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
