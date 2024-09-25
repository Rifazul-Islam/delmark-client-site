import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import useMenu from "../../../hooks/useMenu";
import SelectTitle from "../../../components/SelectTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Our Menu</title>
      </Helmet>

      <Cover
        img={
          "https://images.hindustantimes.com/img/2022/09/08/550x309/vegetable_juice_1662626333166_1662626333304_1662626333304.jpg"
        }
        title="Our Menu"
      />
      <SelectTitle subTitle={"Do't Miss"} title="This Offer" />
      <MenuCategory items={offered} />

      {/* salad Area  */}

      <MenuCategory
        items={salad}
        title={"salad"}
        img="https://ucarecdn.com/01092789-9a15-44fe-abe3-c1aa8cd2a353/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
      />

      {/* Soup Area  */}

      <MenuCategory
        items={soup}
        title={"soup"}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqya4h8VX30xX1mDt3mJDlnThDkJlrGfR4Q&s"
      />
    </div>
  );
};

export default Menu;
