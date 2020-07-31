import React, { Component } from "react";
import axios from "axios";

import "../Assets/AddData.css";
// import { Link } from "react-router-dom";

class AddData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      category: "",
      coupon: "",
      ip: "",
      maturity: "",
      rating: "",
      amount: "",
      yield: "",
      security: "",
      submit: false,
      categoryData: [
        "Capital Bonds",
        "Corporate Bonds",
        "Perpetual/Bank Bonds",
        "PSU Bonds",
        "State Bonds",
        "recommended",
      ],
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    console.log("submitted");
    const { history } = this.props;
    event.preventDefault();
    if (this.state.name)
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://moneyfront-bonds.herokuapp.com/api/bonds",

          {
            name: this.state.name,
            category: this.state.category,
            coupon: this.state.coupon,
            ip: this.state.ip,
            maturity: this.state.maturity,
            rating: this.state.rating,
            amount: this.state.amount,
            yield: this.state.yield,
            security: this.state.security,
          }
        )
        .then((res) => history.push("/all-bond"))
        .catch((error) => console.log(error));
  };

  handleOnClick = () => {
    console.log("submit clicked");
    console.log(this.state);
    this.setState({ submit: true });
  };

  render() {
    return (
      <div>
        <header className="add-bond-header">
          <h3>Product</h3>
          <h1>Bonds</h1>
        </header>
        <div className="form-box">
          <h4>Create Bond</h4>
          <form onSubmit={this.handleOnSubmit} className="form-data">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
              className="input-box"
            />
            <label>Coupon</label>
            <input
              type="text"
              placeholder="Coupon"
              name="coupon"
              value={this.state.coupon}
              onChange={this.handleChange}
              className="input-box"
            />
            <label>Interest Payment</label>
            <input
              type="text"
              placeholder="Interest Payment"
              name="ip"
              value={this.state.ip}
              onChange={this.handleChange}
              className="input-box"
            />
            <label>Security</label>
            <input
              type="text"
              placeholder="Security"
              name="security"
              value={this.state.security}
              onChange={this.handleChange}
              className="input-box"
            />
            <label>Maturity</label>
            <input
              type="text"
              placeholder="Maturity"
              value={this.state.maturity}
              name="maturity"
              onChange={this.handleChange}
              className="input-box"
            />
            <label>Rating</label>
            <input
              type="text"
              placeholder="Rating"
              value={this.state.rating}
              name="rating"
              onChange={this.handleChange}
              className="input-box"
            />
            <label>Amount</label>
            <input
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              name="amount"
              onChange={this.handleChange}
              className="input-box"
            />
            <label>Yield</label>
            <input
              type="text"
              placeholder="Yield"
              value={this.state.yield}
              name="yield"
              onChange={this.handleChange}
              className="input-box"
            />
            <label>Type</label>
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              className="input-box"
            >
              <option>{this.state.categoryData[0]}</option>
              <option>{this.state.categoryData[1]}</option>
              <option>{this.state.categoryData[2]}</option>
              <option>{this.state.categoryData[3]}</option>
              <option>{this.state.categoryData[4]}</option>
              <option>{this.state.categoryData[5]}</option>
              <option>{this.state.categoryData[6]}</option>
            </select>
            <button
              onSubmit={this.handleOnSubmit}
              onClick={this.handleOnClick}
              className="submit-btn"
            >
              {this.state.submit ? "Creating......" : "Create Bond"}
            </button>
          </form>
          {/* <Link to="/all-bond">
            <button className="back-btn">Back</button>
          </Link> */}
        </div>
      </div>
    );
  }
}

export default AddData;
