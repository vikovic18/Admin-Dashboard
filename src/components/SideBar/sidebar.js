import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilBars,
} from "@iconscout/react-unicons";

const Sidebar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  const [expanded, setExpanded] = useState(false);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="top">
          <Link to="/" style={linkStyle}>
            <span className="logo">admin</span>
          </Link>
        </div>
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <div className="icon">
                <UilEstate />
              </div>
              <Link to="/" style={linkStyle}>
                <span onClick={() => setExpanded(!expanded)} className="side">
                  Dashboard
                </span>
              </Link>
            </li>
            <p className="title">LISTS</p>
            <li>
              <div className="icon">
                <UilPackage />
              </div>
              <Link to="/products" style={linkStyle}>
                <span onClick={() => setExpanded(!expanded)} className="side">
                  Products
                </span>
              </Link>
            </li>
            <li>
              <div className="icon">
                <UilUsersAlt />
              </div>
              <Link to="/clients" style={linkStyle}>
                <span onClick={() => setExpanded(!expanded)} className="side">
                  Client
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <ul>
            <p className="title">USERS</p>
            <li>
              <div className="icon">
                <UilSignOutAlt />
              </div>
              <Link to="/login" style={linkStyle}>
                <span className="side">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
