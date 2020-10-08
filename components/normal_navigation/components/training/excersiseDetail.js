import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import GeneralContainer from '../../../general_components/generalContainer'
import Title from '../../../general_components/title'
import PalleteColors from '../../../general_components/palleteColors';
import Subtitle from '../../../general_components/subtitle';
import RutineDetailText from './rutine/rutineDetailText';
import ExcersisePuntuation from './rutine/excersisePuntuation';
import ExcersiseName from './rutine/excersiseName';
import ExcersiseBlockPuntuation from './rutine/excersiseBlockPuntuation';
import ExcersiseBlockMuscles from './rutine/excersiseBlockMuscles';
import ExcersiseBlockDescription from './rutine/excersiseBlockDescription';
import { ScrollView } from 'react-native-gesture-handler';

export default function ExcersiseDetail() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={{width: "100%", height: 410}} source={{uri: 'https://i.blogs.es/b86c79/1366_2000-1-/1366_2000.jpeg'}}></Image>
            
            <View style={Styles.container}>

                <GeneralContainer>
                    
                    <ExcersiseName name={'Press de banca'}></ExcersiseName>

                    <ExcersiseBlockPuntuation puntuation={1}></ExcersiseBlockPuntuation>

                    <ExcersiseBlockMuscles muscles ="Pecho, hombro"></ExcersiseBlockMuscles>

                    <ExcersiseBlockDescription description="El press de banca, press de pecho, fuerza en banco, fuerza acostado o press banca, es un ejercicio de peso libre que trabaja principalmente la zona superior del cuerpo."></ExcersiseBlockDescription>

                </GeneralContainer>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container : {
        borderRadius: 40, 
        backgroundColor: "white",
        marginTop: -40
    }
})