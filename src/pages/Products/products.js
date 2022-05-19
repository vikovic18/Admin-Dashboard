import { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar/sidebar";
import "./product.css";

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/products?_quantity=7 ")
      .then((response) => response.json())
      .then((data) => setproducts(data.data));
  }, []);

  return (
    <div className="productlist">
      <Sidebar />;
      <div className="container">
        <h1>PRODUCTS</h1>
        {products
          ? products.map((product) => (
              <div className="wrapper">
                <div className="cards_wrap">
                  <div className="card-item">
                    <div className="card_inner">
                      <div className="card_top">
                        <img src={product.image} alt="card_image"></img>
                      </div>
                      <div className="card_bottom">
                        <div className="card_category">
                          {`Netprice:${product.price}`}
                        </div>
                        <div className="card_info">
                          <p className="card_title">{product.name}</p>
                          <p className="card_title">{`Taxes:${product.taxes}`}</p>
                        </div>
                      </div>
                      <div className="card_creator">{product.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Products;
