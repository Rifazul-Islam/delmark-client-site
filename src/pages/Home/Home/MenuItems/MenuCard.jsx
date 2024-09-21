const MenuCard = ({ item }) => {
  const { name, recipe, price, image } = item;

  return (
    <div className="flex justify-center">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[100px] "
        src={image}
        alt=""
      />
      <p>
        <h2> {name} -------</h2>
        <p> {recipe} </p>
      </p>
      <p className="text-yellow-500">{price} </p>
    </div>
  );
};

export default MenuCard;
