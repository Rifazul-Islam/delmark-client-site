// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper md:h-[500px] w-full"
    >
      <SwiperSlide>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1680344513206-8f3420af1d22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="w-full"
            src="https://media.istockphoto.com/id/176602698/photo/potato-and-wheat-field.jpg?s=612x612&w=0&k=20&c=Q1xwRlhD24P4AA_UQZz4I-Wmo-nPQajiHSOnwCDYm2E="
            alt="slider"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-6">
          <img src="https://plus.unsplash.com/premium_photo-1726729328727-ed63661c8fc3?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <img
            className=""
            src="https://plus.unsplash.com/premium_photo-1686878940830-9031355ec98c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slider"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
