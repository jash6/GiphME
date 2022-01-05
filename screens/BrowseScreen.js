import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Button,
  Keyboard,
} from "react-native";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { browse } from "../redux/actions";

export default function BrowseScreen() {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const dispatch = useDispatch();
  const { searched } = useSelector((state) => state.userReducer);
  useEffect(() => {}, [searched]);
  console.log(searched);
  return (
    // <SafeAreaView style={styles.view}>
    //   <TextInput
    //     placeholder="Search Giphy"
    //     placeholderTextColor="#000"
    //     style={styles.textInput}
    //     value={term}
    //     onChangeText={updateTerm}
    //   />
    //   <AntDesign
    //     name="check"
    //     size={20}
    //     color="black"
    //     marginLeft={50}
    //     style={{ padding: 1 }}
    //     onPress={() => {
    //       dispatch(browse(term));
    //     }}
    //   />
    //   <FlatList
    //     data={searched}
    //     renderItem={({ item }) => (
    //       <Image
    //         resizeMode="contain"
    //         style={styles.image}
    //         source={{ uri: item.images.original.url }}
    //       />
    //     )}
    //   />
    // </SafeAreaView>
    <View style={{ marginTop: 50 }}>
      <View style={styles.container}>
        <View
          style={
            !clicked ? styles.searchBar__unclicked : styles.searchBar__clicked
          }
        >
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setClicked(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {clicked && (
            <Entypo
              name="cross"
              size={20}
              color="black"
              style={{ padding: 1 }}
              onPress={() => {
                setSearchPhrase("");
              }}
            />
          )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            ></Button>
          </View>
        )}
        {clicked && (
          <AntDesign
            name="check"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              dispatch(browse(searchPhrase));
            }}
          />
        )}
      </View>
      <ScrollView>
        {searched.map((gif, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <Image
                source={{
                  uri: gif.images.preview_gif.url,
                }}
                style={{ width: "100%", height: 180 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {gif.title}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#eee",
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text>{gif.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
