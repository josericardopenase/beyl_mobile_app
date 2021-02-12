import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'
import RutineDetailText from './rutineDetailText'

export default function ExcersiseBlockDescription({description}) {
    return (
        <RutineDetailText title="Descripción">
            <Text style={{color: PalleteColors.textSecondaryColor}}>
                {description}
            </Text>
        </RutineDetailText>
    

    )
}
