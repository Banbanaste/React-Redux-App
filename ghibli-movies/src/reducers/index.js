const initialState = {
  isLoading: false,
  movies: null,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      };
    default:
      return state;
  }
};
