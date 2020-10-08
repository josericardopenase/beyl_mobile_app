import React from 'react'
import { View, Text } from 'react-native'

export default function TrainerTags(props) {
    return (
        <Text style={{fontSize: 11, backgroundColor: "#FFB9B9", color: "#FF5353", fontFamily: "poppins-regular", paddingTop: 2, paddingBottom: 2, paddingRight: 15, paddingLeft: 15, borderRadius: 100, marginRight: 10, marginTop: 10}}>{props.name ? props.name : "hipertrofia"}</Text>
    )
}
