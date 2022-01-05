import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFav } from "../redux/actions";

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.userReducer);
  useEffect(() => {}, [favourites]);

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <ScrollView>
        {favourites.map((gif, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              {/* <GiphImage image={gif.images.original.url}  /> */}
              {console.log(gif.gif.images.preview_gif)}
              <Image
                source={{
                  uri: gif.gif.images.preview_gif.url,
                }}
                style={{ width: "100%", height: 180 }}
              />
              {/* <GiphInfo name={gif.title} image={gif.images.original.url} rating={gif.rating} setFav={setFav}/> */}
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
                <Button
                  title="Remove"
                  onPress={() => {
                    dispatch(removeFav(gif));
                  }}
                />
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
    </SafeAreaView>
  );
}
