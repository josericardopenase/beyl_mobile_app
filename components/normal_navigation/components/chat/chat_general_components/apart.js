import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'

export default function Apart(props) {
    return (
        <Text style={{color: PalleteColors.textSecondaryColor, fontFamily: "poppins-regular", marginTop: 20}}>{props.children}</Text>
    )
}
