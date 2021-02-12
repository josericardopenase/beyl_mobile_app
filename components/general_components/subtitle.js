import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from './palleteColors'

export default function Subtitle(props) {
    return (

        <Text style={{fontSize: 17, fontFamily: "poppins-bold", color: PalleteColors.textPrimaryColor, marginBottom: props.marginBottom}}>{props.children}</Text>


    )
}
