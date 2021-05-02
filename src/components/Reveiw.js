import React from "react";
import Stars from "./Stars";

class Reveiw extends React.Component {
  constructor() {
    super();
    this.state = {
      review1: "Bob",
      review11: "This movie was amazing!",
      review2: "Nathan",
      review22: "I love this movie",
      value: "",
      value2: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeS = this.handleChangeS.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeS(event) {
    this.setState({ value2: event.target.value2 });
  }

  handleSubmit(event) {
    // alert("A review was submitted: " + this.state.value);
    console.log("Love");
    this.event.preventDefault();
  }

  handleClick() {
    console.log("I am working");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h4>Add a Movie Review for GODZILLA VS. KONG</h4>
            <hr></hr>
            <h2>Previous User Reviews</h2>
            <p>{this.state.review1}</p>
            <p>{this.state.review11}</p>
            <p>{this.state.review2}</p>
            <p>{this.state.review22}</p>
            <p>{this.state.value}</p>
            <p>{this.state.value}</p>
            <p></p>
            <label>Your name</label>
            <input
              type="text"
              value={this.state.value2}
              onChange={this.handleChangeS}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Post your Review!
            </label>
            <textarea value={this.state.value} onChange={this.handleChange} />
            <hr />
            {/* This is the button for submitting */}
            <input onClick={this.handleClick} type="submit" value="Submit" />
            <Stars />
          </div>
        </form>
      </div>
    );
  }
}
export default Reveiw;
