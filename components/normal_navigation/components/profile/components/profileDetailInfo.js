import React from 'react'
import { View, Text } from 'react-native'
import ProfileInformationComponent from './profileInformationComponent'

export default function ProfileDetailInfo() {
    return (
        <View style={{flexDirection: "row", marginTop: 20}}>

            <ProfileInformationComponent icon = "weight-kilogram" data = "70kg" title="peso"></ProfileInformationComponent>
            <ProfileInformationComponent icon = "human-male-height" data = "188cm" title="altura"></ProfileInformationComponent>
            <ProfileInformationComponent icon = "account-heart" data = "15-20%" title="grasa corporal"></ProfileInformationComponent>

        </View>
    )
}
