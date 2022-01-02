import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {Glitch} from 'rn-glitch-effect';

export default function Header() {
    return (
        <View style={styles.containerWithBg}>
            <Glitch
                text={'GiphME'}
                mainColor={'white'}
                shadowColor={'pink'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerWithBg: 
    {
        backgroundColor: '#eee', 
        marginBottom: '5%',
        alignItems: 'center', 
    },
});