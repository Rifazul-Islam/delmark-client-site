import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noNavberFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");

  return (
    <div>
      {noNavberFooter || <Navbar></Navbar>}
      <div className="max-w-6xl mx-auto">
        <Outlet> </Outlet>
      </div>
      {noNavberFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
