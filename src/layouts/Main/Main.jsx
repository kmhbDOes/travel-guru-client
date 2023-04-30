import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Header from "../../pages/Shared/Header/Header";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
