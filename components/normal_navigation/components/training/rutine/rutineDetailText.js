import React from 'react'
import { View, Text } from 'react-native'
import Subtitle from '../../../../general_components/subtitle'

export default function RutineDetailText(props) {
    return (
        <View style={{marginTop: 18}}>
            <Subtitle>{props.title}</Subtitle>
            {
                props.children
            }
        </View>
    )
}
