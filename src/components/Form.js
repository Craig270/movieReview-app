import React from "react";
import Stars from "./Stars";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevReview1: "Bob",
      prevReview11: "This movie was amazing!",
      prevReview111: "5",
      prevReview2: "Nathan",
      prevReview22: "I thought it was the best movie I'd ever seen!",
      prevReview222: "4",
      name: "",
      review: "",
      stars: "",
      user: [],
      post: {
        name: "this",
        review: "should",
        stars: "be",
      },
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameChange = this.handleReviewChange.bind(this);
    this.handleNameChange = this.handleStarChange.bind(this);
  }

  handleNameChange = (event) => {
    console.log(this.state.name);
    this.setState({ name: event.target.value });
  };

  handleReviewChange = (event) => {
    console.log(this.state.review);
    this.setState({ review: event.target.value });
  };

  handleStarChange = (event) => {
    console.log(this.state.stars);
    this.setState({ stars: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const review = event.target.review;
    const stars = event.target.stars;
    this.setState({
      post: {
        ...this.state.post,
        name: name,
        review: review,
        stars: stars,
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>
            {this.state.prevReview1} : {this.state.prevReview11} <br></br>
            {this.state.prevReview111} Stars!
          </p>
          <p>
            {this.state.prevReview2} : {this.state.prevReview22} <br></br>
            {this.state.prevReview222} Stars!
          </p>

          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            name="name"
          />
        </div>
        <div>
          <label>Review</label>
          <textarea
            value={this.state.review}
            onChange={this.handleReviewChange}
            name="review"
          ></textarea>
        </div>
        <div>
          <label>Star Rating</label>
          <select
            value={this.state.stars}
            onChange={this.handleStarChange}
            name="stars"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <Stars />
      </form>
    );
  }
}

export default Form;
