import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#331D2C",
        width: "250px",
        height: "100vh",
        // display: "flex",
        float: "left",
      }}
    >
      <ul className="li-style" style={{ listStyleType: "none", margin: "0" }}>
        <li>
          <NavLink to="/">DashBoard</NavLink>
        </li>
        <li>
          <NavLink to="/department">Department</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
