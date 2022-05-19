import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/SideBar/sidebar"
import Cards from "../../components/Cards/cards";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Navbar />
        <h1>Dashboard</h1>
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
