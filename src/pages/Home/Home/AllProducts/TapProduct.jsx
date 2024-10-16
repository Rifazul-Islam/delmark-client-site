import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import AllProducts from "./AllProducts";
import { useEffect, useState } from "react";
import useCategory from "../../../../hooks/useCategory";
const TapProduct = () => {
  const [category] = useCategory();

  const categories = [
    "All Products",
    "Fish",
    "Vegetables",
    "Meat",
    "Fruits",
    "Milk",
  ];

  const vegetables = category.filter((item) => item.category === "Vegetables");
  const fish = category.filter((item) => item.category === "Fish");
  const meat = category.filter((item) => item.category === "Meat");
  const fruits = category.filter((item) => item.category === "Fruits");
  const milk = category.filter((item) => item.category === "Milk");

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="pt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins text-primary">
          Featured Products
        </h2>
      </div>

      <Tabs
        className="text-center mt-5"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex justify-center gap-4 cursor-pointer text-lg font-serif">
          {categories?.map((item, index) => {
            return (
              <Tab
                key={index}
                className={` ${tabIndex === index ? "border-b-2" : ""} `}
              >
                {" "}
                {item}
              </Tab>
            );
          })}
        </TabList>
        <TabPanel>
          <AllProducts producted={category} />
        </TabPanel>

        <TabPanel>
          <AllProducts producted={fish} />
        </TabPanel>

        <TabPanel>
          <AllProducts producted={vegetables} />
        </TabPanel>
        <TabPanel>
          <AllProducts producted={meat} />
        </TabPanel>
        <TabPanel>
          <AllProducts producted={fruits} />
        </TabPanel>
        <TabPanel>
          <AllProducts producted={milk} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TapProduct;
