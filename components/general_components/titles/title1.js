
import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../palleteColors'

export default function Title1(props) {
    return (
        
        <View style={props.style}>
            <Text style={{fontSize: 29, fontFamily: "poppins-regular", color: !props.color ? PalleteColors.textPrimaryColor : props.color, marginBottom: props.marginBottom}}>{props.children}</Text>
        </View>

    )
}
