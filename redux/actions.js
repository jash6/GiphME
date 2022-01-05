export const GIFS_LIST_SUCCESS = "GIFS_LIST_SUCCESS";
export const GIFS_LIST_FAIL = "GIFS_LIST_FAIL";
export const SEARCH_GIFS = "SEARCH_GIFS";
export const ADD_FAV = "ADD_FAV";
export const GET_FAV = "GET_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GIFS_BROWSE_SUCCESS = "GIFS_BROWSE_SUCCESS";
export const GIFS_BROWSE_FAIL = "GIFS_BROWSE_FAIL";
import firebase from "../firebase";
import { Store } from "./store";

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
    image: item.images.preview_gif.url,
  };
  const db = firebase.firestore();
  db.collection("favourites").add({
    title: gif.title,
    image: gif.image,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    gif: item,
  });
  dispatch({
    type: ADD_FAV,
    payload: item,
  });
};

export const getFav = () => async (dispatch) => {
  const db = firebase.firestore();
  var collection = [];
  const response = db.collection("favourites");
  const data = await response.get();
  data.forEach((item) => {
    let j = item.data();
    collection.push(j);
  });

  const favourites = Store.getState().userReducer.favourites;

  if (favourites.length !== collection)
    dispatch({
      type: GET_FAV,
      payload: collection,
    });
};

export const removeFav = (item) => async (dispatch) => {
  const db = firebase.firestore();
  const response = await db
    .collection("favourites")
    .where("title", "==", item.title);
  response.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      const favs = Store.getState().userReducer.favourites;
      const res = favs.filter((x) => x.title !== doc.data().title);
      const result = {
        res: res,
      };

      dispatch({
        type: REMOVE_FAV,
        payload: result,
      });
      doc.ref.delete();
    });
  });
};

export const search = (text) => (dispatch) => {
  const gifs2 = Store.getState().userReducer.gifs;
  const result = gifs2.filter((x) => x.title.includes(text));
  const res = {
    result: result,
  };

  dispatch({
    type: SEARCH_GIFS,
    payload: res,
  });
};

export const browse = (text) => async (dispatch) => {
  try {
    const result = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=2rvMyZozhtLPx7fJ3kL9sYtxT9Xwmw0R&q=${text}`
    );
    const json = await result.json();
    if (json) {
      dispatch({
        type: GIFS_BROWSE_SUCCESS,
        payload: json,
      });
    } else {
      console.log("Unable to fetch!");
    }
  } catch (error) {
    dispatch({
      type: GIFS_BROWSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
