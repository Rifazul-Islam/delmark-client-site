import React from "react";
import SelectTitle from "../../../../components/SelectTitle";
import { FaTruck, FaLeaf, FaRecycle, FaUserTie } from "react-icons/fa";
import "./OurMenu.css";
const OurMenu = () => {
  const professionalServices = [
    {
      icon: FaTruck,
      title: "Bulk Orders",
      description:
        "Get wholesale prices on large quantity orders for your restaurant or business.",
      buttonText: "Learn More",
    },
    {
      icon: FaLeaf,
      title: "Seasonal Produce",
      description:
        "Stay updated on seasonal offerings to keep your menu fresh and exciting.",
      buttonText: "View Calendar",
    },
    {
      icon: FaRecycle,
      title: "Sustainable Practices",
      description:
        "Learn about our eco-friendly farming and packaging methods.",
      buttonText: "Discover More",
    },
    {
      icon: FaUserTie,
      title: "Account Manager",
      description:
        "Get personalized service with a dedicated account manager for your business.",
      buttonText: "Contact Us",
    },
  ];
  return (
    <div className="my-16 pt-3">
      <SelectTitle subTitle={"Check it Out"} title={" For Professionals"} />
      {/* For Professionals Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center text-green-700">
                  <service.icon className="mr-2" />
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex md:flex-row flex-col  items-center justify-center gap-5 pb-8 mb-16 text-white bg-slate-500 opacity-75 py-10">
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
      </div> */}
    </div>
  );
};

export default OurMenu;
