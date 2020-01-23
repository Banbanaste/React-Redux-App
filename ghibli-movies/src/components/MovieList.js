import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchMovies } from "../actions";

import MovieCard from "./MovieCard";

const MovieList = props => {
  useEffect(() => {
    props.fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {props.movies &&
        !props.isLoading &&
        props.movies.map(movie => (
          <MovieCard
            title={movie.title}
            description={movie.description}
            director={movie.director}
          />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    movies: state.movies,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchMovies })(MovieList);
