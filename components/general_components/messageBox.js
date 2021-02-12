import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from './palleteColors'
import Title1 from './titles/title2'
import Title3 from './titles/title3'

export default function MessageBox({message}) {
    return (
        <View style={{backgroundColor: PalleteColors.background, padding: 15, justifyContent: "center", borderRadius: 10}}>
            <Title3>{message}</Title3>
        </View>
    )
}
