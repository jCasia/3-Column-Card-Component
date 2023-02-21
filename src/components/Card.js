import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="car-img-container">
        <img src={props.src} alt="car img" className="car-img" />
      </div>
      <h1 className="car-heading">{props.title}</h1>
      <p className="car-text">{props.text}</p>
      <a className="car-link">Learn More</a>
    </div>
  );
};

export default Card;
