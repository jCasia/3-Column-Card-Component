import React from "react";

import "./CardContent.css";
import Card from "./Card";

import sedanImg from "../images/icon-sedans.svg";
import suvsImg from "../images/icon-suvs.svg";
import luxuryImg from "../images/icon-luxury.svg";

const Cars = () => {
  const carmodel = [
    {
      title: "sedan",
      text: "Choose a sedan for its affordability and excellent fuel exonomy. Ideal for cruising in the city or on your next road trip",
      src: sedanImg,
    },
    {
      title: "suvs",
      text: "Take an SUV for its spacious interior, powe, and versatility. Perfect for your next vacation and off-road adventures.",
      src: suvsImg,
    },
    {
      title: "Luxury",
      text: "Cruise in the best car brans without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style",
      src: luxuryImg,
    },
  ];

  return (
    <div className="container">
      {carmodel.map((model) => (
        <Card title={model.title} text={model.text} src={model.src} />
      ))}
    </div>
  );
};

export default Cars;
