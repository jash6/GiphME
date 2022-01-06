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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
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
              <Image
                source={{
                  uri: gif.image,
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
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeFav(gif));
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <FontAwesome5
                      name="heart"
                      size={20}
                      style={{
                        marginBottom: 3,
                        alignSelf: "flex-end",
                        color: "red",
                      }}
                      solid
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
