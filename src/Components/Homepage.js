import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../Assets/Homepage.css";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(props) {
    // console.log(this.props);
    return (
      <div>
        <div className="header">
          <h3>Product</h3>
          <h1>Moneyfront</h1>
        </div>
        <div className="products-box">
          <h2>Products</h2>
          <div className="product-box-card">
            <Link to="/all-bond">
              <button className="card1">
                <h3>Bonds</h3>
                <div className="card1-notification">
                  {this.props.bondcustomers ? (
                    <h6>{this.props.bondcustomers.length}</h6>
                  ) : (
                    <h6>0</h6>
                  )}
                </div>
              </button>
            </Link>
            <button className="card2">
              <h3>Corporate Deposits</h3>
            </button>
            <button className="card3">
              <h3>Recommendation</h3>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
