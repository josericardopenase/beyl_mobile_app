import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'
import Bold from '../../../../general_components/titles/bold'
import Title3 from '../../../../general_components/titles/title3'
import Title5 from '../../../../general_components/titles/title5'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProgressBox({obj}) {
    return (
        <View style={{borderRadius: 10, backgroundColor: PalleteColors.background, padding: 15, marginBottom: 15, flexGrow: 1}}>
            <Title3 primary="true"><Bold>{obj.name}</Bold>, terminado</Title3>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <MaterialIcon name="clock" color={PalleteColors.textSecondaryColor} style={{marginRight: 5, marginBottom: 3}}></MaterialIcon>
                <Title5>{obj.time.substring(0,2)} h {obj.time.substring(3,5)} m</Title5>
            </View>
        </View>
    )
}
