import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllBond from "../Components/Allbond";
import Addbond from "../Components/Addbond";
import Homepage from "../Components/Homepage";
import "../Assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bondcustomers: [],
    };
  }

  async componentDidMount() {
    let response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://moneyfront-bonds.herokuapp.com/api/bondcustomers"
    );
    let jsonData = await response.json();
    this.setState({ bondcustomers: jsonData });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/add-bond" component={Addbond} />
            <Route path="/all-bond">
              <AllBond bondcustomers={this.state.bondcustomers} />
            </Route>
            <Route exact path="/">
              <Homepage bondcustomers={this.state.bondcustomers} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
