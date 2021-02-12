import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PalleteColors from '../../../../general_components/palleteColors';

export default function ExcersiseName(props) {
    return (
    <View style={{alignItems: "center", marginBottom: 20, marginTop: 20}}>

        <Text style={{fontFamily: "poppins-bold", marginTop: 20, fontSize: 21, color: PalleteColors.textPrimaryColor}}>{props.name}</Text>
        
    </View>

    )
}
