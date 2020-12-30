import React from 'react'
import { View, Text } from 'react-native'

export default function Form({style, children}) {
    return (
        <View style={style}>
            {
                children
            }
        </View>
    )
}
