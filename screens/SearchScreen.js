import React,{useState}  from 'react'
import { SafeAreaView,StyleSheet,View, Text } from 'react-native'

export default function SearchScreen() {
    const [gifs, setGifs] = useState([]);
    const [term, updateTerm] = useState('');
    async function fetchGifs(type) {
        try {
          const API_KEY = "2rvMyZozhtLPx7fJ3kL9sYtxT9Xwmw0R";
          const BASE_URL = 'api.giphy.com/v1/gifs/search';
          const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
          const res = await resJson.json();
          setGifs(res.data);
        } catch (error) {
          console.warn(error);
        }
      } 
      function onEdit(newTerm) {
        updateTerm(newTerm);
        fetchGifs();
      }
    return (
        <SafeAreaView style={styles.view}>
        <TextInput
          placeholder="Search Giphy"
          placeholderTextColor='#fff'
          style={styles.textInput}
          onChangeText={(text) => onEdit(text)}
        />
        <FlatList
          data={gifs}
          renderItem={({item}) => (
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{uri: item.images.original.url}}
            />
          )}
        />
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'black'
    },
    textInput: {
      width: '100%',
      height: 50,
      borderColor: 'white',
      borderRadius: 20,
    },
    image: {
      width: 380,
      height: 250,
      borderWidth: 3,
      margin: 5
    },
  });