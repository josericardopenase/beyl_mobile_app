import { Inter_300Light } from '@expo-google-fonts/inter'
import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PlansCard from './components/plansCard'

export default function TrainerPlansPage() { 

    const {width, height} = Dimensions.get('window')
    const ELEMENT_WIDTH = width


    return (
        <ScrollView 
        contentContainerStyle={{flexGrow: 1, justifyContent: "center", alignSelf: "center"}} 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        decelerationRate={40}
        bounces={false}
        snapToInterval={width}
        >
            
                <View style={{width: 5}}></View>
                <PlansCard width = {ELEMENT_WIDTH}></PlansCard>

                <PlansCard width = {ELEMENT_WIDTH}></PlansCard>

                <PlansCard width = {ELEMENT_WIDTH}></PlansCard>
                <View style={{width: 5}}></View>


        </ScrollView>
    )
}
