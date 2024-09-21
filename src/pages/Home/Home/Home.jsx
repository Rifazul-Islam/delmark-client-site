import React from "react";
import Slider from "./Slider";
import Cegegori from "./Cegegori";
import Planting from "./Planting";
import MenuItems from "./MenuItems/MenuItems";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Cegegori />
      <Planting></Planting>
      <MenuItems></MenuItems>
    </div>
  );
};

export default Home;
