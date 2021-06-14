
import * as actions from '../constant/types';

const initState = {
  movieDetails: []
}

const movieReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.GET_POSTER:
      return {
        ...state,
        movieDetails: action.payload
      }
    default:
      return state;
  }
};

export default movieReducer;