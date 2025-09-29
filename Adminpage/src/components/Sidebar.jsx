import React from "react";
import { NavLink } from "react-router-dom";
import { FaTh, FaGraduationCap, FaUsers, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="title">Training Tracker</h2>
      <ul className="menu">
        <li>
          <NavLink to="/" end>
            <FaTh className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/programs">
            <FaGraduationCap className="icon" /> Programs
          </NavLink>
        </li>
        <li>
          <NavLink to="/batches">
            <FaUsers className="icon" /> Batches
          </NavLink>
        </li>
        <li>
          <NavLink to="/progress">
            <FaChartBar className="icon" /> Progress
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <FaUsers className="icon" /> Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;