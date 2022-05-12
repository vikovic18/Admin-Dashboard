import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div className="Sidebar">
      <div className="top">
        <Link to="/" style={linkStyle}>
          <span className="logo">admin</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={linkStyle}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/products" style={linkStyle}>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/team" style={linkStyle}>
              <span>Team Members</span>
            </Link>
          </li>
          <li>
            <Link to="/clients" style={linkStyle}>
              <span>Client Members</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <p className="title">USERS</p>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
