import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from "../../../assets/home/banners.jpg";
import img2 from "../../../assets/home/02.jpg";

const Slider = () => {
  return (
    <Carousel>
      <div className="md:h-[670px] h-auto">
        <img
          className=""
          src="https://plus.unsplash.com/premium_photo-1686878940830-9031355ec98c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="slider"
        />
      </div>
      <div className="h-6">
        <img src="https://plus.unsplash.com/premium_photo-1726729328727-ed63661c8fc3?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="h-6">
        <img src={img} alt="slider" />
      </div>
    </Carousel>
  );
};

export default Slider;
