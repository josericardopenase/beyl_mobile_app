import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'
import RutineDetailText from './rutineDetailText'

export default function ExcersiseBlockMuscles({muscles}) {
    return (
        <RutineDetailText title="Grupos musculares">
            <Text style={{fontFamily: "poppins-bold", color: PalleteColors.textSecondaryColor, fontSize: 15}}>{muscles}</Text>
        </RutineDetailText>
        
    )
}
