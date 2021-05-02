import React from "react";

function Movie(props) {
  return (
    <div>
      <h2>{props.information.name}</h2>
      <img src={props.information.poster} alt="Movie"></img>
      <p>{props.information.plot}</p>
      <hr />
    </div>
  );
}

export default Movie;
