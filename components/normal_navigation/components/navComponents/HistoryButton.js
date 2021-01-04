import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather';

export default function HistoryButton({onPress, color}) {
    return (
        <TouchableOpacity onPress={() => onPress()} style={{alignItems: "center", height: "100%", justifyContent: "center", marginLeft: 15, marginRight: 15}}>
            <Feather name={"plus-circle"} color={"#d5d5d5"} size={28}/>
        </TouchableOpacity>
    )
}
