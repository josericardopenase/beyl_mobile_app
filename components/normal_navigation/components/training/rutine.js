import React from 'react'
import { View, Text, SafeAreaView, Picker } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../general_components/generalContainer'
import PalleteColors from '../../../general_components/palleteColors'
import Title from '../../../general_components/title'
import Excersise from './rutine/excersise'


export default function Rutine() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <GeneralContainer style={{marginBottom: 50}}>
                <View style={{backgroundColor: PalleteColors.mainColor, color : "white", borderRadius: 10, marginTop: 15}}>
                    <Picker style={{color: "white", fontFamily: "poppins-regular"}}>
                        <Picker.Item label="Dia 1" value="java" />
                        <Picker.Item label="Dia 2" value="js" />
                    </Picker>
                </View>

                <Excersise></Excersise>
                <Excersise></Excersise>
                <Excersise></Excersise>
                <Excersise></Excersise>
                <Excersise></Excersise>
                <Excersise></Excersise>
            </GeneralContainer>
        </ScrollView>

    )
}
