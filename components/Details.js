import React from 'react'
import { View, Text,Image } from 'react-native'

export default function Details(props) {
    const { title, images, trending_datetime, create_datetime, user,rating } =
    props.route.params;
    return (
        <View>
            <GifImage image={images} />
            <GifName name={title} />
            <GifDescription trending_datetime={trending_datetime} create_datetime={create_datetime} user={user} rating={rating} />
        </View>
    )
}


const GifImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const GifName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const GifDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.trending_datetime}
  </Text>
);
