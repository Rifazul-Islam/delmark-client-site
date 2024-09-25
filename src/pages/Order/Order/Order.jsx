import React, { useState } from "react";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Cover img="https://i.ibb.co.com/C2Pzqmg/pexels2.jpg" title="Our Order" />

      <Tabs
        className="my-10"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>salad</Tab>
          <Tab>soup</Tab>
          <Tab>offered</Tab>
          <Tab>pizza</Tab>
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
