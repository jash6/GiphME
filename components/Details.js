import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import BottomTabs from "./BottomTabs";
import { useSelector, useDispatch } from "react-redux";
import { addFav } from "../redux/actions";

export default function Details({ route, navigation }) {
  const { title, images, trending_datetime, create_datetime, rating, gif } =
    route.params;
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.userReducer);
  let exist = favourites.filter((x) => x.title === title);

  if (exist.length > 0) {
    exist = true;
  } else {
    exist = false;
  }
  return (
    <SafeAreaView>
      <GifName name={title} navigation={navigation} />
      <GifImage image={images} />
      <Text
        style={{
          fontWeight: "400",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          marginLeft: 20,
        }}
      >
        Details:
      </Text>
      <GifDescription
        text={"Trending Date and Time"}
        item={trending_datetime}
      />
      <GifDescription text={"Create Date and Time"} item={create_datetime} />
      <GifDescription text={"Rating"} item={rating} />
      {!exist ? (
        <TouchableOpacity
          onPress={() => {
            dispatch(addFav(gif));
          }}
        >
          <View style={{ alignItems: "center" }}>
            <FontAwesome5
              name="heart"
              size={40}
              style={{
                marginBottom: 3,
                alignSelf: "center",
              }}
            />
            <Text style={{ fontWeight: "bold" }}>Add To Favourites</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <Text>Added to Favourites</Text>
      )}

      <BottomTabs />
    </SafeAreaView>
  );
}

const GifImage = (props) => (
  <View style={{ marginTop: 10, marginBottom: 30 }}>
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 350 }}
    />
  </View>
);

const GifName = (props) => (
  <View>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("TrendingScreen")}
      >
        <View style={{ alignItems: "center" }}>
          <FontAwesome5 name="chevron-left" size={25} style={{ margin: 10 }} />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "600",
          marginTop: 10,
          marginHorizontal: 15,
        }}
      >
        {props.name}
      </Text>
    </View>
  </View>
);

const GifDescription = (props) => (
  <View>
    <Text
      style={{
        marginBottom: 20,
        marginHorizontal: 20,
        fontWeight: "400",
        fontSize: 15,
        fontWeight: "bold",
      }}
    >
      {props.text}: {props.item}
    </Text>
    <Divider width={1.0} style={{ marginBottom: 20 }} />
  </View>
);
