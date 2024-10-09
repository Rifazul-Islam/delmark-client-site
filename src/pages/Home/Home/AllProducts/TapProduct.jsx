import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import AllProducts from "./AllProducts";
import { useEffect, useState } from "react";
import "./TapProducts.css";
const TapProduct = () => {
  const [products, setProducts] = useState([]);
  const categories = [
    "All Products",
    "Fish",
    "Vegetables",
    "Meat",
    "Fruits",
    "Milk",
  ];
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const vegetables = products.filter((item) => item.category === "Vegetables");
  const fish = products.filter((item) => item.category === "Fish");
  const meat = products.filter((item) => item.category === "Meat");
  const fruits = products.filter((item) => item.category === "Fruits");
  const milk = products.filter((item) => item.category === "Milk");
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
        <TabList className="border-none">
          {categories?.map((item) => {
            return <Tab> {item}</Tab>;
          })}
        </TabList>
        <TabPanel>
          <AllProducts producted={products} />
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
