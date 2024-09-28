import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noNavberFooter = location.pathname.includes("/login");
  return (
    <div>
      {noNavberFooter || <Navbar></Navbar>}
      <Outlet> </Outlet>
      {noNavberFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
