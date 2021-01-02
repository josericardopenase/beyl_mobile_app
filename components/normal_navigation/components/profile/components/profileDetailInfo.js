import React from 'react'
import { View, Text } from 'react-native'
import BoxContainer from '../../../../general_components/containers/boxContainer'
import Bold from '../../../../general_components/titles/bold'
import Title3 from '../../../../general_components/titles/title3'
import ProfileInformationComponent from './profileInformationComponent'

export default function ProfileDetailInfo() {
    return (
        <BoxContainer title="Tus datos actuales:">
            <View style={{flexDirection: "row", marginTop: 10}}>

                <ProfileInformationComponent icon = "weight-kilogram" data = "70kg" title="peso"></ProfileInformationComponent>
                <ProfileInformationComponent icon = "human-male-height" data = "188cm" title="altura"></ProfileInformationComponent>
                <ProfileInformationComponent icon = "account-heart" data = "15-20%" title="grasa corporal"></ProfileInformationComponent>

            </View>
        </BoxContainer>
    )
}
