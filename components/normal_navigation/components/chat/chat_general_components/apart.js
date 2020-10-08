import React from 'react'
import { View, Text } from 'react-native'

export default function Apart(props) {
    return (
        <Text style={{color: "grey", fontFamily: "poppins-regular", marginTop: 20}}>{props.children}</Text>
    )
}
