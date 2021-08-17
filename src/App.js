import React from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covid19 from "./img/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log(this.state.data)
  }

  handleCountryChanged = async (country) => {
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid19} alt="covid19" />
        <p>
        created by
        <a style={{textDecorationLine:"none"}} href="https://github.com/mh-saeed/project-2-covid19-tracker">
          {" "}
          mh-saeed
        </a>
        </p>
        <Cards data={data} />
        <CountryPicker handleCountryChanged={this.handleCountryChanged} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
