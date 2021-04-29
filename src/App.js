import React from "react";
import "./App.css";
import movieData from "./MovieList";
import Movie from "./components/Movie";

const App = () => {
  const movieDetails = movieData.map((item) => (
    <Movie key={item.id} information={item} />
  ));
  console.log();
  return <div>{movieDetails}</div>;
};

export default App;
