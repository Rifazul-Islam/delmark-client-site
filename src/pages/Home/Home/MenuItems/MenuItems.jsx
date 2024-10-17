import SelectTitle from "../../../../components/SelectTitle";
import MenuCard from "./MenuCard";
import useMenu from "../../../../hooks/useMenu";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import { useQuery } from "@tanstack/react-query";

const MenuItems = () => {
  const axiosPublice = useAxiosPublice();
  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosPublice.get("/category");
      return res.data;
    },
  });

  // console.log(categories);

  return (
    <div className="mb-16 bg-base-100">
      <h2 className="text-[22px] font-inter font-medium"> Categories </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-2 mb-8   ">
        {categories.map((item) => (
          <MenuCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
