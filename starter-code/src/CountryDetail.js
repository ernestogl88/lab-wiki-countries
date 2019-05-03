import React, { Component } from "react";
import Countrylink from "./Countrylink";
import countries from "./countries.json";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: countries.filter(
        country => country.cca3 === this.props.match.params.id
      )
    };
  }

  componentDidUpdate() {
    let country = countries.filter(
      country => country.cca3 === this.props.match.params.id
    );
    this.setState({
      ...this.state,
      country: country
    });
  }

  render() {
    // {
    //   console.log(this.state);
    // }
    return (
      <React.Fragment>
        <h1>{this.state.country[0].name.official}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td id="td-capital">Capital</td>
              <td>{this.state.country[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.country[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.country[0].borders.map(country => {
                    console.log(country)
                    return <Countrylink key={country.cca3} {...country} />;
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
