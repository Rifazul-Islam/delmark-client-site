import React from "react";
import Slider from "./Slider";
import Cegegori from "./Cegegori";
import Planting from "./Planting";
import MenuItems from "./MenuItems/MenuItems";
import Recomendation from "./Recomendation/Recomendation";
import OurMenu from "./OurMenu/OurMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Cegegori />
      <Planting></Planting>
      <MenuItems></MenuItems>
      <Recomendation />
      <OurMenu />
      <Testimonials />
    </div>
  );
};

export default Home;
