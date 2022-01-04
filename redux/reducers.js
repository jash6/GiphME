import {
  ADD_FAV,
  GIFS_LIST_SUCCESS,
  GIFS_LIST_FAIL,
  SEARCH_GIFS,
} from "./actions";

const initialState = {
  gifs: [],
  loading: true,
  favourites: [],
  filtered: [],
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
    case SEARCH_GIFS:
      return {
        ...state,
        filtered: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
