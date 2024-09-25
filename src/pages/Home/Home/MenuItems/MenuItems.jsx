import SelectTitle from "../../../../components/SelectTitle";
import MenuCard from "./MenuCard";
import useMenu from "../../../../hooks/useMenu";

const MenuItems = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let menuItems = data.filter((item) => item.category === "popular");
  //       setMenu(menuItems);
  //     });
  // }, []);

  //   console.log(menu);
  return (
    <div className="mb-16">
      <SelectTitle subTitle={"check it out"} title={"order online"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8 ">
        {popular.map((item) => (
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
