import React from "react";
import movieData from "../MovieList";

class oneMovie extends React.Component {
  constructor() {
    super();
    this.state = "This is a state";
  }
  render() {
    return (
      <div>
        <h2> Movie Review</h2>
        <form>
          <input
            type="text"
            label="MovieReviewText"
            id="MovieReviewTextID"
            name="MovieReviewName"
          />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default oneMovie;
