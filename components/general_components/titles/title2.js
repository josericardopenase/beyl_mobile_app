
import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../palleteColors'

export default function Title1(props) {
    return (
        
        <View style={props.style}>
            <Text style={{fontSize: 23, fontFamily: "poppins-regular", color: PalleteColors.textPrimaryColor, marginBottom: props.marginBottom}}>{props.children}</Text>
        </View>

    )
}
