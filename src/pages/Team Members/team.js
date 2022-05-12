import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import "./team.css";

const Team = () => {
  return (
    <div className="teamlist">
      <Sidebar />;
      <div className="container">
        <Navbar />
        <div>BUILD YOUR COMPONENTS STARTING FROM THIS TEAM DIV</div>
      </div>
    </div>
  );
};

export default Team;
