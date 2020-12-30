
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import apiSettings from '../../../../api/apiSettings';
import { Video } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ExcersiseVideo(props) {


    const video = apiSettings.url + props.route.params.video;
    console.log(video)
    // Later on in your styles..
    var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    });

    return (
    <View style={{flex : 1, position: "relative"}}>

        <Video source={{uri: video}}   
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
        style={{ flex: 1}}/>

    </View>
    )
}
