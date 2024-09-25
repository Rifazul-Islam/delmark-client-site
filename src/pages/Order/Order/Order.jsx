import React, { useState } from "react";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const [menu] = useMenu();
  const categories = ["salad", "soup", "dessert", "drink"];
  const { category } = useParams();
  const indexIntial = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(indexIntial);

  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <Cover img="https://i.ibb.co.com/C2Pzqmg/pexels2.jpg" title="Our Order" />

      <Tabs
        className="my-10"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="mb-10">
          {categories.map((item) => (
            <Tab>{item}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <OrderTab orders={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab orders={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab orders={offered} />
        </TabPanel>

        <TabPanel>
          <OrderTab orders={pizza} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
