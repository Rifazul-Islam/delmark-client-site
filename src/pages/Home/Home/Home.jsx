import React from "react";

import Cegegori from "./Cegegori";
import Planting from "./Planting";
import MenuItems from "./MenuItems/MenuItems";
import Recomendation from "./Recomendation/Recomendation";
import OurMenu from "./OurMenu/OurMenu";
import Testimonials from "./Testimonials/Testimonials";
import Slider from "./Slider/Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home </title>
      </Helmet>

      <Slider />
      {/* <Cegegori /> */}
      <MenuItems></MenuItems>
      <Planting></Planting>

      <Recomendation />
      <OurMenu />
      <Testimonials />
    </div>
  );
};

export default Home;
