import { FaArrowRight } from "react-icons/fa";
const MenuCard = ({ item }) => {
  const { name, image, backgroundColor } = item;

  return (
    <div
      style={{ background: backgroundColor }}
      className="border-[1.5px] pt-2 border-gray-400 shadow-lg rounded-xl cursor-pointer overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className=" mx-auto bg-none rounded-lg h-40 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h2 className="text-lg mb-2 font-semibold mt-16">{name}</h2>
      </div>
    </div>
  );
};

export default MenuCard;
