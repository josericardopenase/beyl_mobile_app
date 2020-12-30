import React from 'react'
import { View, Text } from 'react-native'

export default function Bold(props) {
    return (
    <Text style={{fontFamily: "poppins-bold"}}>{props.children}</Text>
    )
}
