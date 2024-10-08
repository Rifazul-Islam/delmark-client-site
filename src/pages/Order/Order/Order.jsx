import React, { useState } from "react";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Order.css";
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
      <Cover
        img="https://plus.unsplash.com/premium_photo-1664302148512-ddea30cd2a92?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Our Order"
      />

      <Tabs
        className="mt-8"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="uppercase">
          {categories.map((item, indx) => (
            <Tab key={indx}>{item}</Tab>
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
