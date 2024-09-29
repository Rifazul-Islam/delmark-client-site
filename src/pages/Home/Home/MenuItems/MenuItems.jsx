import SelectTitle from "../../../../components/SelectTitle";
import MenuCard from "./MenuCard";
import useMenu from "../../../../hooks/useMenu";

const MenuItems = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "pro");
  console.log(popular);

  return (
    <div className="mb-16">
      <SelectTitle subTitle={"check it out"} title={"order online"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 px-3">
        {popular.map((item) => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 px-[30px]">
          Show More
        </button>
      </div>
    </div>
  );
};

export default MenuItems;
