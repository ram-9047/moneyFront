import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Assets/Allbond.css";

class AllBond extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    let response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://moneyfront-bonds.herokuapp.com/api/bonds"
    );
    let jsonData = await response.json();
    console.log(jsonData);
    this.setState({ data: jsonData });
  }

  render() {
    console.log(this.props.bondcustomers);
    return this.state.data.length ? (
      <div>
        <div className="all-bond-header">
          <div>
            <h3>Product</h3>
            <h1>Bonds</h1>
          </div>
          <div className="all-bond-header-link">
            <Link to="/add-bond">
              <button className="add-bond">Create Bond</button>
            </Link>
          </div>
        </div>
        <div className="all-bond-table">
          <table className="all-bond-table-box">
            <tbody className="">
              <tr>
                <th className="column-heading-name">Name</th>
                <th className="column-heading-amount">Amount</th>
                <th className="column-heading-coupon">Coupon</th>
                <th className="column-heading-maturity">Maturity</th>
                <th className="column-heading-yield">Yield</th>
                <th className="column-heading-ip">Interest Payment</th>
                <th className="column-heading-rating">Rating</th>
                <th className="column-heading-type">Type</th>
              </tr>
            </tbody>
            {this.state.data.map((singleData) => (
              <tbody>
                <tr className="table-row">
                  <th className="column-items">{singleData.name}</th>
                  <th className="column-items">{singleData.amount}</th>
                  <th className="column-items">{singleData.coupon}</th>
                  <th className="column-items">{singleData.maturity}</th>
                  <th className="column-items">{singleData.ip}</th>
                  <th className="column-items">{singleData.rating}</th>
                  <th className="column-items">{singleData.yield}</th>
                  <th className="column-items">{singleData.category}</th>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="bondCustomer">
            <h3>Customers</h3>
            <div className="bondCustomer-div">
              {this.props.bondcustomers
                ? this.props.bondcustomers.map((singleCustomer) => {
                    return (
                      <div className="bondCustomer-card">
                        <h2>{singleCustomer.clientName}</h2>
                        <h4>{singleCustomer.clientID}</h4>
                        <p>{singleCustomer.bondName}</p>
                        <h5>{singleCustomer.platform}</h5>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="loading">
        <div className="loading-text">
          <p>Loading</p>
        </div>
        <div className="loader">Loading...</div>
      </div>
    );
  }
}

export default AllBond;
