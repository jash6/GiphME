import React from 'react'
import { Text,ScrollView } from 'react-native'

export default function Categories(props) {
    return (
        <ScrollView horizontal>
            {props.list.map((item)=>(
                <Text key={item.name_encoded}>{item.name}</Text>
            ))} 
        </ScrollView>
    )
}
