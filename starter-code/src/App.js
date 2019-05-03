import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import { Route, Switch } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import Navbar from "./Navbar";
import Countrylink from "./Countrylink";


class App extends Component {
  constructor(){
    super()
    this.state={
      countries : countries
    }
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5" id="list-container">
              <div className="list-group">
                {this.state.countries.map(country => <Countrylink key={country.cca3} {...country}/>)}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/country/:id" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
