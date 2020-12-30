import React from 'react'
import { View, Text } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/FontAwesome5';

export default function ExcersisePuntuation({puntuation}) {

    return (

        <View style={{flexDirection: "row"}}>
            {
                
               [0,1,2,3,4].map((value, index) =>   <MaterialIcon key={value} name="fire" size={30} style={{marginRight: 10}} color = {index >= puntuation ? "grey" : "#ff4567"}></MaterialIcon>)
                
            }

        </View>
    )
}
