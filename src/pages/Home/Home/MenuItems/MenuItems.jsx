import SelectTitle from "../../../../components/SelectTitle";
import MenuCard from "./MenuCard";
import useMenu from "../../../../hooks/useMenu";

const MenuItems = () => {
  const [menu] = useMenu();

  let popular = menu.filter((item) => item.category === "popular");
  // console.log("check the Popurlar Data", popular);
  const categories = [
    {
      id: 1,
      name: "Frozen Mixed Vegetables",
      image: "https://i.ibb.co.com/X2yF0xR/flow.png",
      category: "Frozen",
      backgroundColor: "#E3F2FD",
      changeImage: true,
    },
    {
      id: 2,
      name: "Premium Beef Steak",
      image: "https://i.ibb.co.com/VTW2fsS/meat.png",
      category: "Meat and Fish",
      backgroundColor: "#FFEBEE",
      changeImage: true,
    },
    {
      id: 3,
      name: "Organic Whole Milk",
      image: "https://i.ibb.co.com/0Kyvd1X/organic-milk.png",
      category: "Milk",
      backgroundColor: "#F3E5F5",
      changeImage: true,
    },
    {
      id: 4,
      name: "Fresh Orange Juice",
      image: "https://i.ibb.co.com/gJPNRMN/joss.png",
      category: "Beverages",
      backgroundColor: "#FFF3E0",
      changeImage: true,
    },

    {
      id: 5,
      name: "Ripe Red Strawberries",
      image: "https://i.ibb.co.com/3rX6grW/lici.png",
      category: "Fruits",
      backgroundColor: "#FCE4EC",
      changeImage: true,
    },

    {
      id: 6,
      name: "Fresh Atlantic Salmon",
      image: "https://i.ibb.co.com/VghFNcN/vagita.png",
      category: "Meat",
      backgroundColor: "#FFF3E0",
      changeImage: true,
    },
    {
      id: 7,
      name: "Fresh Broccoli",
      image: "https://i.ibb.co.com/J2n4bjs/fico.png",
      category: "Vegetables",
      backgroundColor: "#E8F5E9",
      changeImage: true,
    },
  ];
  return (
    <div className="mb-16 bg-base-100">
      <SelectTitle
        subTitle={"Shop by Category "}
        title={" Popular on the Shofi store."}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 px-16  ">
        {categories.map((item) => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
