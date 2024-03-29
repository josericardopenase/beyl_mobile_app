
import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../palleteColors'

export default function Title3(props) {
    return (
        
        <View style={props.style}>
            <Text style={{fontSize: 17, fontFamily: "poppins-regular", color: props.color ? props.color : props.primary ? PalleteColors.textPrimaryColor : PalleteColors.textSecondaryColor, marginBottom: props.marginBottom, textAlign: props.textAlign ? props.textAlign : null}}>{props.children}</Text>
        </View>


    )
}
