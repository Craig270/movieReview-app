import React from "react";
import "./App.css";
import "./Stars.css";
import Navbar from "./components/Navbar";
import movieData from "./MovieList";
import Movie from "./components/Movie";
import Title from "./components/Title";
import Review from "./components/Reveiw";
import oneMovie from "./components/oneMovie";
import Form from "./components/Form";

const App = () => {
  const movieDetails = movieData.map((item) => (
    <Movie key={item.id} information={item} />
  ));
  console.log(movieData);
  return (
    <div class="container">
      <div class="row">
        <div>
          <h2>
            {" "}
            <Navbar />
            <oneMovie />
          </h2>
        </div>
      </div>

      <div>
        <div className="row">
          <div class="col-md-4 bg-secondary">
            <h3>Movie Review</h3>
            <hr></hr>
          </div>
          <div class="col-md-8 bg-info">
            <h3>Movie List:</h3>
            <hr></hr>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 bg-secondary">
          {/* <Review /> */}
          <Form />
          <oneMovie />
        </div>
        <div class="col-md-8 bg-info">{movieDetails}</div>
      </div>
      <p className="bg-warning">These are words</p>
    </div>
  );
};

export default App;
