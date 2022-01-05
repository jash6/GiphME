import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
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

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <Trending navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
});
