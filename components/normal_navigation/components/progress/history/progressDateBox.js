
import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'
import Bold from '../../../../general_components/titles/bold'
import Title1 from '../../../../general_components/titles/title2'
import Title3 from '../../../../general_components/titles/title3'
import Title5 from '../../../../general_components/titles/title5'
import ProgressBox from './progressBox'

export default function ProgressDateBox({active, first, obj}) {

    const months = ['En', 'Febr', 'Mzo', 'Abr', 'My', 'Jun', 'Jul', 'Ag', 'Sept', 'Oct', 
'Nov', 'Dic']

    return (
        <View style={{flexDirection: "row", alignItems: "center", marginBottom: -5, padding: 5, width: "100%"}}>

            <View style={{opacity: active ? null : 0, flexDirection:"row"}}>
                <View>
                    <Title3 color="#ffc600" ><Bold>{obj.date.slice(8,11)}</Bold></Title3>
                    <Title3 style={{marginTop: -10}}>{ months[parseInt(obj.date.slice(5,7))-1]}</Title3>
                </View>

            </View>

                <View style={{position: 'relative'}}>
                    <View style={{height: 50, width: 2, backgroundColor: active ? PalleteColors.mainColor : PalleteColors.textSecondaryColor, position: 'relative', zIndex: 20, marginLeft: 15, marginRight: 15, borderRadius: 10, elevation: 10}} /> 
                    <View style={{height: 120, width: 2, backgroundColor:  PalleteColors.textSecondaryColor, position: 'absolute', zIndex: 20, marginLeft: 15, marginRight: 15, zIndex: 0}} /> 
                </View>
            <ProgressBox obj={obj}></ProgressBox>
        </View>
    )
}
