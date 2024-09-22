import React from "react";
import SelectTitle from "../../../../components/SelectTitle";
import "./OurMenu.css";
const OurMenu = () => {
  return (
    <div className="my-16 menuitems bg-fixed pt-3">
      <SelectTitle subTitle={"Check it Out"} title={"From Our Menu"} />

      <div className="flex md:flex-row flex-col  items-center justify-center gap-5 pb-8 mb-16 text-white bg-slate-500 opacity-75 py-10">
        <div>
          <img
            className="h-80 w-80 rounded-lg"
            src="https://images.unsplash.com/photo-1631401551847-78450ef649d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <p className="text-sm"> Septembar 22,2027</p>
          <p className="w-96 py-3">
            Some is People are para daiche is best Out. A single person. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt
            molestias explicabo dolorum aut! Quasi repellat quam possimus ea
            corrupti amet excepturi unde, fugiat libero soluta ut, ipsum
            aspernatur nisi.
          </p>
          <div>
            <button className="btn btn-outline border-0 border-b-4 border-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
