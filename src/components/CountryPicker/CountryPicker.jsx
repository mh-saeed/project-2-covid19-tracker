import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountriesName } from "../../api";

const CountryPicker = ({ handleCountryChanged }) => {
  const [fetchedCountry, setFetchedCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountry(await fetchCountriesName());
    };
    fetchAPI();
  }, [setFetchedCountry]);

  //   console.log(fetchedCountry);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChanged(e.target.value)}
      >
        <option value="">GLobal</option>
        {fetchedCountry.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
