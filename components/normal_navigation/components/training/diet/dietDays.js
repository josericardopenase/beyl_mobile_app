import React from 'react'
import { View, Text, Picker } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'
import Launch from './launch'

export default function DietDays() {
    return (
        <View>
                <View style={{backgroundColor: PalleteColors.mainColor, color : "white", borderRadius: 10, marginTop: 15}}>
                    <Picker style={{color: "white", fontFamily: "poppins-regular"}}>
                        <Picker.Item label="Dia 1" value="java" />
                        <Picker.Item label="Dia 2" value="js" />
                    </Picker>
                </View>

                <Launch></Launch>
                <Launch></Launch>
                <Launch></Launch>
        </View>
    )
}
