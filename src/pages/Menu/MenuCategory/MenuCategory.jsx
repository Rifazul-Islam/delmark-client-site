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
      <div></div>
    </div>
  );
};

export default MenuCategory;
