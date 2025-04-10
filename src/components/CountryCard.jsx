import React from "react";
import "./CountryCard.css"

function CountryCard({image, name}) {
  return <div className="countryCard">
    <img src={image} alt={name} />
    <p>{name}</p>
  </div>;
}

export default CountryCard;
