import { FaArrowRight } from "react-icons/fa";

const MenuCard = ({ item }) => {
  const { name, recipe, price, image, description } = item;

  return (
    <div className="border-2 shadow-lg rounded-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full rounded-lg h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h2 className="text-xl mb-2 font-semibold">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold text-[#BB8506]">${price.toFixed(2)}</p>
      </div>
      <div className="overflow-hidden p-2 pb-4">
        <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-2.5">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
