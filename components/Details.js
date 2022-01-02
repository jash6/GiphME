import React from 'react'
import { View, Text,Image,SafeAreaView,TouchableOpacity } from 'react-native'
import { Divider } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import BottomTabs from './BottomTabs';

export default function Details(props) {
    const { title, images, trending_datetime, create_datetime, username,user_url,rating,navigation } =
    props.route.params;
    return (
        <SafeAreaView>
            <GifName name={title} username={username} user_url={user_url} navigation={navigation} />
            <GifImage image={images} />
            <Text style={{fontWeight: "400",fontSize: 20,fontWeight: 'bold', marginBottom:20,marginLeft: 20}}>Details:</Text>
            <GifDescription text={'Trending Date and Time'} item={trending_datetime} />
            <GifDescription text={'Create Date and Time'} item={create_datetime} />
            <GifDescription text={'Rating'} item={rating} />
            <TouchableOpacity>
                <View style={{alignItems:'center'}}>
                    <FontAwesome5
                    name='heart'
                    size={40}
                    style={{
                        marginBottom: 3,
                        alignSelf: "center",
                    }}
                    />
                    <Text style={{fontWeight:'bold'}}>Add To Favourites</Text>
                </View>
            </TouchableOpacity>
            <BottomTabs/>
        </SafeAreaView>
    )
}


const GifImage = (props) => (
    <View style={{ marginTop: 10,marginBottom: 30,}}>
        <Image source={{ uri: props.image }} style={{ width: "100%", height: 350 }} />
    </View>
);

const GifName = (props) => (
    <View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity
        onPress={() =>
            props.navigation.navigate('TrendingScreen')
        }>
            <View style={{alignItems:'center'}}>
                <FontAwesome5
                name='chevron-left'
                size={25}
                style={{margin:10}}
                />
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
        <View style={{alignItems:'flex-end',marginRight:10}}>
        <Text>Creator: {props.username}</Text>
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
            fontWeight: 'bold'
            }}
            >
            {props.text}: {props.item}
        </Text>
        <Divider
            width={1.0}
            style={{marginBottom: 20}}
        />
  </View>
);
