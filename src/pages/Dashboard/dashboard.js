import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import Cards from "../../components/Cards/cards";
import Team from "../../components/Team Members/team";

import "./dashboard.css";

const Dashboard = () => {
  let userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <h1>Hi {userDetails.username}</h1>
        <Cards />
        <h3>Team</h3>
        <Team />
      </div>
    </div>
  );
};

export default Dashboard;
