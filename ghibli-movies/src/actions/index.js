import axios from "axios";

export const fetchMovies = () => {
  return dispatch => {
    dispatch({ type: "FETCH_START" });
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(err => console.log(err));
  };
};
