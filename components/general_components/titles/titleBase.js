import React from 'react'
import { View, Text } from 'react-native'

export default function TitleBase({children, color, marginTop}) {
    return (
            <Text style={{
                fontFamily: "poppins-regular",
                color: color,
                marginTop: marginTop 
            }}>{children}</Text>
    )
}
