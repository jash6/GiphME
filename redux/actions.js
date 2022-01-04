export const GIFS_LIST_REQUEST = "GIFS_LIST_REQUEST";
export const GIFS_LIST_SUCCESS = "GIFS_LIST_SUCCESS";
export const GIFS_LIST_FAIL = "GIFS_LIST_FAIL";
export const SEARCH_GIFS = "SEARCH_GIFS";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
import firebase from "../firebase";

const API_KEY = "2rvMyZozhtLPx7fJ3kL9sYtxT9Xwmw0R";
const BASE_URL = "http://api.giphy.com/v1/gifs/trending";

export const getGifs = () => async (dispatch) => {
  try {
    const result = await fetch(
      `http://api.giphy.com/v1/gifs/trending?api_key=2rvMyZozhtLPx7fJ3kL9sYtxT9Xwmw0R`
    );
    const json = await result.json();
    if (json) {
      dispatch({
        type: GIFS_LIST_SUCCESS,
        payload: json,
      });
    } else {
      console.log("Unable to fetch!");
    }
  } catch (error) {
    dispatch({
      type: GIFS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addFav = (item) => (dispatch) => {
  const gif = {
    title: item.title,
    image: item.images.original.url,
  };
  const db = firebase.firestore();
  db.collection("favourites").add({
    title: gif.title,
    image: gif.image,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
  dispatch({
    type: ADD_FAV,
    payload: gif,
  });
};
