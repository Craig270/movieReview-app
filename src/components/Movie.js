import React from "react";

function Movie(props) {
  return (
    <div>
      <h2>{props.information.name}</h2>
      <img src={props.information.poster} alt="Girl in a jacket"></img>
      <p>{props.information.plot}</p>
    </div>
  );
}

export default Movie;
