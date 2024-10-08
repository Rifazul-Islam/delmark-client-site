import Cegegori from "./Cegegori";
import Planting from "./Planting";
import MenuItems from "./MenuItems/MenuItems";
import Recomendation from "./Recomendation/Recomendation";
import OurMenu from "./OurMenu/OurMenu";
import Testimonials from "./Testimonials/Testimonials";
import Slider from "./Slider/Slider";
import { Helmet } from "react-helmet-async";
import Test from "./Test/Test";
import Delivery from "./Delivery/Delivery";
import AllProducts from "./AllProducts/AllProducts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home </title>
      </Helmet>

      <Slider />

      {/* <Cegegori /> */}
      <MenuItems></MenuItems>
      <AllProducts></AllProducts>

      <Planting></Planting>

      <Recomendation />
      <OurMenu />
      <Delivery />
      <Testimonials />
      {/* <Test></Test> */}
    </div>
  );
};

export default Home;
