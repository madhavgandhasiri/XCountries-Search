import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import styles from "./Home.module.css";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    try {
      const res = await fetch(
        "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
      );
      const data = await res.json();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearch(e) {
    const value = e.target.value;
    setSearchText(value);
    console.log(value);
  }

  const filteredCountries = countries.filter((country) =>
    country.common.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inputDiv}>
        <input
          type="text"
          value={searchText}
          placeholder="Search for countries"
          onChange={handleSearch}
        />
      </div>
      <div className={styles.cardDiv}>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.common}
            image={country.png}
            name={country.common}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
