import React from "react";

const MovieCard = props => {
  return (
    <div
      style={{
        width: "300px",
        padding: "30px",
        borderRadius: "30px",
        height: "min-content",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        margin: "0px 10px 20px",
        backgroundColor: "dodgerblue",
        color: "#fff"
      }}
    >
      <h1>{props.title}</h1>
      <h4>{props.director}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default MovieCard;
