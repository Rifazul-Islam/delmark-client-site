import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { ImQuotesRight } from "react-icons/im";
import "@smastrom/react-rating/style.css";
import SelectTitle from "../../../../components/SelectTitle";
const Testimonials = () => {
  const [allReview, setAllReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setAllReview(data));
  }, []);

  // console.log(allReview);

  return (
    <div className="mt-20 ">
      <SelectTitle subTitle={"What Our Client Say"} title={"Testimonials"} />

      <>
        <Swiper
          effect={"coverflow"}
          slidesPerView={3}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper  my-16"
        >
          {allReview?.map((item) => (
            <SwiperSlide key={item.id}>
              <div class="bg-white p-6 rounded-lg  shadow-lg border">
                <div class="flex items-center mb-4 justify-between">
                  <div className="flex justify-center items-center">
                    <img
                      src={item?.customerImage}
                      alt="Michael Chen"
                      class="w-16 h-16 rounded-full object-cover"
                    />
                    <div class="ml-4">
                      <h3 class="text-lg font-bold">{item.customerName}</h3>
                      {/* reviews icons */}
                      <div className="flex justify-center">
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={item.rating}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/* Quats Icons */}
                  <div className="flex justify-center py-4 text-4xl">
                    <ImQuotesRight />
                  </div>
                </div>
                <p class="text-gray-700 mb-4 font-Dancing text-semibold">
                  {item.reviewText}
                </p>
                <p>{item.reviewText}</p>
                <p class="text-sm text-gray-400 my-5">
                  Reviewed on: {item.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <div className="mt-16">
        <img src="https://sunny-footwear.vercel.app/payment.webp" alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
