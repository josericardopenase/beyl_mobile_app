import React from 'react'
import { View, Text } from 'react-native'
import ExcersisePuntuation from './excersisePuntuation'
import RutineDetailText from './rutineDetailText'

export default function ExcersiseBlockPuntuation({puntuation}) {
    return (

        <RutineDetailText title="Dificultad">

            <ExcersisePuntuation puntuation={puntuation}></ExcersisePuntuation>

        </RutineDetailText>
        
    )
}
