import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import "./product.css";

const Products = () => {
  return (
    <div className="productlist">
      <Sidebar />;
      <div className="container">
        <Navbar />
        <div>BUILD YOUR COMPONENTS STARTING FROM THIS PRODUCTS DIV</div>
      </div>
    </div>
  );
};

export default Products;
