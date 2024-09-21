// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../assets/home/sli1.jpg";
import img2 from "../../../assets/home/sli2.jpg";
import img3 from "../../../assets/home/sli3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SelectTitle from "../../../components/SelectTitle";

const Cegegori = () => {
  return (
    <>
      <SelectTitle subTitle={"from 10:am to 12:pm"} title={"order online"} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-14"
      >
        <SwiperSlide>
          <div>
            <img src={img1} alt="" />
            <p className="-mt-10 text-xl text-white">Tomato vegetable </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="" />
            <p className="-mt-10 text-xl text-white"> Gourd vegetable</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="" />
            <p className="-mt-10 text-xl text-white"> Maltiple</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Cegegori;
