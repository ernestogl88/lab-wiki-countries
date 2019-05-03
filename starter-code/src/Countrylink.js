import React, { Component } from "react";
import { Link } from 'react-router-dom';
import countries from './countries.json';

export default class Countrylink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: countries.filter(
        country => country.cca3 === this.props.cca3
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
    return (
      <Link
        to={"/country/" + this.state.country[0].cca3}
        className="list-group-item list-group-item-action"
      >
        {`${this.state.country[0].flag} ${this.state.country[0].name.official}`}
      </Link>
    );
  }
}
