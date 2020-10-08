import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../../../general_components/generalContainer'
import TrainerTags from '../../home/trainerTags'

export default function TagList() {
    return (
        <View style={{marginTop: 30}}>
            <GeneralContainer>
                <Text style={{fontSize: 17, fontFamily: "poppins-bold"}}>Modalidades</Text>

                <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                    <TrainerTags></TrainerTags>
                    <TrainerTags></TrainerTags>
                    <TrainerTags name="ganar masa muscular"></TrainerTags>
                    <TrainerTags name="estres anabolico"></TrainerTags>
                    <TrainerTags></TrainerTags>
                    <TrainerTags name="perdida de peso"></TrainerTags>
                </View>
            </GeneralContainer>

        </View>
    )
}
