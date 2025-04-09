import React from "react";
import styles from "./CountryCard.module.css";

function CountryCard({image, name}) {
  return <div className={styles.countryCard}>
    <img src={image} alt={name} />
    <p>{name}</p>
  </div>;
}

export default CountryCard;
