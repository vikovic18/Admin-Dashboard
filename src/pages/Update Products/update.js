import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import "./update.css";

const Update = () => {
  return (
    <div className="updatelist">
      <Sidebar />;
      <div className="container">
        <Navbar />
        <div>BUILD YOUR COMPONENTS STARTING FROM THIS PRODUCTS UPDATE DIV</div>
      </div>
    </div>
  );
};

export default Update;
