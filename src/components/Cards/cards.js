import React from "react";
import { CardsData } from "../../data";
import Card from "../Card/card";
import "./cards.css";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              barvalue={card.barValue}
              value={card.value}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
