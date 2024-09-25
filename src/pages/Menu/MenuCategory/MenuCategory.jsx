import { Link } from "react-router-dom";
import MenuCard from "../../Home/Home/MenuItems/MenuCard";
import Cover from "../../Shared/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pb-10">
      {title && <Cover title={title} img={img} />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8 ">
        {items.map((item) => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
      <div className="overflow-hidden">
        <Link to={`/order/${title}`}>
          <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
