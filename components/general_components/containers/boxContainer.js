import React from 'react'
import { View, Text } from 'react-native'
import GeneralContainer from '../generalContainer'
import Bold from '../titles/bold'
import Title3 from '../titles/title3'

export default function BoxContainer({children, title}) {
    return (
        <View style={{marginTop: 10}}>
            <Title3 primary={true}><Bold>{title}</Bold></Title3>
            {
                children
            }
        </View>
    )
}
