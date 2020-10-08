import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PlansText(props) {
    return (
       
    <View style={{flexDirection: "row", alignItems: "center"}}>
        <Ionicons name="ios-checkmark" color="green" size={30}></Ionicons>
        <Text style={{fontFamily: "poppins-regular", marginLeft: 20}}>{props.children}</Text>
    </View>

    )
}
