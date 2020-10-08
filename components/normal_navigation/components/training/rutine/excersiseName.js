import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PalleteColors from '../../../../general_components/palleteColors';

export default function ExcersiseName(props) {
    return (
    <View style={{alignItems: "center", marginBottom: 20}}>
        
        <View style={{width: 80, height: 80, backgroundColor: PalleteColors.mainColor, alignItems: "center", justifyContent: "center", marginTop: -40, borderRadius: 20}}>
            <Ionicons name={"ios-play"} size={40} color="white"></Ionicons>
        </View>

        <Text style={{fontFamily: "poppins-bold", marginTop: 20, fontSize: 21}}>{props.name}</Text>
        
    </View>

    )
}
