import React from 'react'
import { View,Image ,Text,TouchableOpacity, ScrollView} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function Trending({ gifs }) {
    return (
        
        <ScrollView>
        {gifs.map((gif, index) => (
            <TouchableOpacity
                key={index}
                activeOpacity={1}
                style={{ marginBottom: 30 }}
        //   onPress={() =>
        //     navigation.navigate("RestaurantDetail", {
        //       name: restaurant.name,
        //       image: restaurant.image_url,
        //       price: restaurant.price,
        //       reviews: restaurant.review_count,
        //       rating: restaurant.rating,
        //       categories: restaurant.categories,
        //     })
        //   }
            >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <GiphImage image={gif.images.original.url} />
            <GiphInfo name={gif.title} rating={gif.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    )
}
const GiphImage = (props) => (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
  
  const GiphInfo = (props) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
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
        <Text>{props.rating}</Text>
      </View>
    </View>
  );

