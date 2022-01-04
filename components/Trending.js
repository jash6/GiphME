import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { addFav } from "../redux/actions";

export default function Trending({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {}, [gifs, filtered, items]);

  const { gifs, favourites, filtered } = useSelector(
    (state) => state.userReducer
  );

  let items = [];
  filtered.result.length > 0 ? (items = filtered.result) : (items = gifs);
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
              images: gif.images.original.url,
              trending_datetime: gif.trending_datetime,
              create_datetime: gif.create_datetime,
              username: gif.user.username,
              user_image: gif.user.avatar_url,
              rating: gif.rating,
              navigation: navigation,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            {/* <GiphImage image={gif.images.original.url}  /> */}
            <Image
              source={{
                uri: gif.images.original.url,
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
              {/* {fav<5 ?<TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }} onPress={onPressHandler(gif.title,gif.images.original.url)}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
              </TouchableOpacity>: <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
              </TouchableOpacity>} */}
              {favourites.length < 5 ? (
                <Button
                  title="Add"
                  onPress={() => {
                    // onPressHandler(gif.title, gif.images.original.url)
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

// const GiphImage = (props) => (
//   <>
//     <Image
//       source={{
//         uri: props.image,
//       }}
//       style={{ width: "100%", height: 180 }}
//     />

//   </>
// );

// const GiphInfo = (props) => (
//   <View
//     style={{
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginTop: 10,
//     }}
//   >
//     <View>
//       <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
//     </View>
//     {fav<5 ?<TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }} onPress={onPressHandler(props.name,props.image)}>
//       <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
//     </TouchableOpacity>: <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
//     </TouchableOpacity>}

//     <View
//       style={{
//         backgroundColor: "#eee",
//         height: 30,
//         width: 30,
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 15,
//       }}
//     >
//       <Text>{props.rating}</Text>
//     </View>
//   </View>
// );
