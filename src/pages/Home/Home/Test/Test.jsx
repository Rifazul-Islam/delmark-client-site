import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import "./Test.css";
import { Rating } from "@smastrom/react-rating";
import { ImQuotesRight } from "react-icons/im";
const Test = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);

  return (
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
        {sliders?.map((item) => (
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
              <p class="text-gray-700 mb-4">{item.reviewText}</p>
              <p class="text-sm text-gray-400">Reviewed on: {item.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Test;
