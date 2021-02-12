import React from 'react'
import { View, Text } from 'react-native'
import apiSettings from '../../../../../api/apiSettings'
import PalleteColors from '../../../../general_components/palleteColors'
import ProfileImage from '../../../../general_components/profileImage'
import Bold from '../../../../general_components/titles/bold'
import Title3 from '../../../../general_components/titles/title3'

export default function TrainerInformation({trainer}) {
    return (
        <View style={{backgroundColor : PalleteColors.background, padding: 10, borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            <ProfileImage url={apiSettings.url + trainer.profile_pic} size={60}></ProfileImage>
            <Title3 style={{marginLeft: 20}} primary={true}><Bold>{trainer.first_name + " " + trainer.last_name}</Bold></Title3>
        </View>
    )
}
