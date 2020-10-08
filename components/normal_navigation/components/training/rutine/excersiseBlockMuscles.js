import React from 'react'
import { View, Text } from 'react-native'
import RutineDetailText from './rutineDetailText'

export default function ExcersiseBlockMuscles({muscles}) {
    return (
        <RutineDetailText title="Grupos musculares">
            <Text style={{fontFamily: "poppins-bold", color: "grey", fontSize: 17}}>{muscles}</Text>
        </RutineDetailText>
        
    )
}
