import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs({navigation}) {
    return (
        <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" navigation={navigation} />
      <Icon icon="search" text="Browse" navigation={navigation} />
      <Icon icon="user" text="Favourites" navigation={navigation}/>
    </View>
    )
}
const Icon = (props) => (
    <TouchableOpacity >
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );