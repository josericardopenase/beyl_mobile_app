import React from 'react'
import { View, Text } from 'react-native'
import RutineDetailText from './rutineDetailText'

export default function ExcersiseBlockDescription({description}) {
    return (
        <RutineDetailText title="Descripción">
            <Text style={{color: "grey"}}>
                {description}
            </Text>
        </RutineDetailText>
    

    )
}
