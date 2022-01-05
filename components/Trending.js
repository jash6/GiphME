import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addFav } from "../redux/actions";

export default function Trending({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {}, [gifs, filtered, items, favourites]);

  const { gifs, favourites, filtered } = useSelector(
    (state) => state.userReducer
  );

  let exist = [];
  favourites.map((x) => {
    gifs.map((y) => {
      if (x.title === y.title) {
        exist.push(y);
      }
    });
  });

  let items = [];
  filtered.length > 0 ? (items = filtered) : (items = gifs);
  return (
    <ScrollView>
      {items.map((gif, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("Details", {
              title: gif.title,
              images: gif.images.downsized.url,
              trending_datetime: gif.trending_datetime,
              create_datetime: gif.create_datetime,
              rating: gif.rating,
              gif: gif,
            })
          }
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

              {favourites.includes(gif) || exist.includes(gif) ? (
                <Button title="Fav" />
              ) : favourites.length < 5 ? (
                <Button
                  title="Add"
                  onPress={() => {
                    dispatch(addFav(gif));
                  }}
                />
              ) : (
                <Button title="Disabled" />
              )}
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
  );
}
