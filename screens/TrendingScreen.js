import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import BottomTabs from "../components/BottomTabs";
import { useSelector, useDispatch } from "react-redux";
import { getGifs, getFav } from "../redux/actions";

export default function TrendingScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFav());
    dispatch(getGifs());
  }, [dispatch, favourites]);
  const { gifs, favourites, filtered } = useSelector(
    (state) => state.userReducer
  );
  // const [gifs, setGifs] = useState([]);
  // const [cat, setCat] = useState([]);
  // useEffect(()=> {
  //     fetchGifs()
  // },[])
  // async function fetchGifs() {
  //   try {
  //     const API_KEY = "2rvMyZozhtLPx7fJ3kL9sYtxT9Xwmw0R";
  //     const BASE_URL = 'http://api.giphy.com/v1/gifs/trending';
  //     const BASE_URL_2 = 'http://api.giphy.com/v1/gifs/categories'
  //     const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
  //     const resJson2 = await fetch(`${BASE_URL_2}?api_key=${API_KEY}`);
  //     const res = await resJson.json();
  //     const res2 = await resJson2.json()
  //     setGifs(res.data);
  //     setCat(res2.data)
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      {/* <Categories /> */}
      <Trending navigation={navigation} />
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
});
