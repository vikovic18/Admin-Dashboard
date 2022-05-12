import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import "./client.css";
import Navbar from "../../components/Navbar/navbar";

const Client = () => {
  return (
    <div className="clientlist">
      <Sidebar />;
      <div className="container">
        <Navbar />
        <div>BUILD YOUR COMPONENTS STARTING FROM THIS CLIENT DIV</div>
      </div>
    </div>
  );
};

export default Client;
