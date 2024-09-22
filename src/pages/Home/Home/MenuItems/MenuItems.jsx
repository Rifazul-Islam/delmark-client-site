import React, { useEffect, useState } from "react";
import SelectTitle from "../../../../components/SelectTitle";
import MenuCard from "./MenuCard";

const MenuItems = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        let menuItems = data.filter((item) => item.category === "popular");
        setMenu(menuItems);
      });
  }, []);

  //   console.log(menu);
  return (
    <div className="mb-16">
      <SelectTitle subTitle={"check it out"} title={"order online"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8 ">
        {menu.map((item) => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
      <div>
        <button className="btn btn-outline border-0 border-b-4 px-[30px]">
          Show More
        </button>
      </div>
    </div>
  );
};

export default MenuItems;
