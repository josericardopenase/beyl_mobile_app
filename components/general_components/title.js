import React from 'react'
import { View, Text } from 'react-native'
import PalleteColors from './palleteColors'

export default function Title(props) {
    return (

            <View>
                <View style={{flexDirection: "row",  marginTop: props.marginTop ? props.marginTop : 30, }}>
                    <Text style={{fontFamily: "poppins-bold", fontSize: 25, color: PalleteColors.textPrimaryColor}}>{props.title[0]}</Text>
                    <Text style={{fontFamily: "poppins-regular", fontSize: 25, color: PalleteColors.textPrimaryColor}}>{props.title[1]}</Text>
                </View>
            </View>

    )
}
