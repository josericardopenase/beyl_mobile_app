
import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
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
    <View style={{flex : 1, position: "relative", backgroundColor: "black", overflow: "hidden", alignItems: "center", justifyContent: "center"}}>
        <View style={{borderRadius: 20, overflow: "hidden"}}>
            <Video source={{uri: video}}   
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay
            isLooping
            isMuted
            style={{ borderRadius: 30, width:  Dimensions.get('window').width, height : Dimensions.get('window').height}}/>
        </View>
    </View>
    )
}
