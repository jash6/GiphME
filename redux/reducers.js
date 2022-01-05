import {
  ADD_FAV,
  GET_FAV,
  GIFS_LIST_SUCCESS,
  GIFS_LIST_FAIL,
  GIFS_BROWSE_SUCCESS,
  GIFS_BROWSE_FAIL,
  SEARCH_GIFS,
  REMOVE_FAV,
} from "./actions";

const initialState = {
  gifs: [],
  loading: true,
  filtered: [],
  favourites: [],
  searched: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GIFS_LIST_SUCCESS:
      return { ...state, loading: false, gifs: action.payload.data };
    case GIFS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_FAV:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case GET_FAV:
      return {
        ...state,
        favourites: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        favourites: action.payload.res,
      };
    case SEARCH_GIFS:
      return {
        ...state,
        filtered: action.payload.result,
      };
    case GIFS_BROWSE_SUCCESS:
      return {
        ...state,
        searched: action.payload.data,
      };
    case GIFS_BROWSE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
