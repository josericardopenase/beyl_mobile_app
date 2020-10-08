import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function TouchableImage(props) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('ImageView', [{image : props.src}])}>
            <Image style = {props.style} source={{uri: props.src}}/>
        </TouchableOpacity>
    )
}
