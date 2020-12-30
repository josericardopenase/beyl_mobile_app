
import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../palleteColors'

export default function Title3(props) {
    return (
        
        <View style={props.style}>
            <Text style={{fontSize: 17, fontFamily: "poppins-regular",  color: props.primary ? PalleteColors.textPrimaryColor : PalleteColors.textSecondaryColor, marginBottom: props.marginBottom}}>{props.children}</Text>
        </View>


    )
}
