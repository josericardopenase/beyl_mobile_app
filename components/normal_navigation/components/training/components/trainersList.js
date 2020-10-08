import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../../general_components/generalContainer'
import Subtitle from '../../../../general_components/subtitle'
import TrainerImage from './trainerImage'
import TrainingBottom from './trainingBottom'

export default function TrainersList() {
    return (
        <GeneralContainer>


            <Subtitle marginBottom={10}>Tu entrenador:</Subtitle>
            <View style={{marginBottom: 60}}>
                <TrainerImage></TrainerImage>
            </View>


            <TrainingBottom icon="fire" page="Rutine">Rutina</TrainingBottom>
            <TrainingBottom icon="food-apple" page="Diet">Dieta</TrainingBottom>
        </GeneralContainer>      
    )
}
