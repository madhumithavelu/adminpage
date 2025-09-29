import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Admin.css";

const Adminpage = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Adminpage;