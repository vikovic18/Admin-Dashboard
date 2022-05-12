import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/SideBar/sidebar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
