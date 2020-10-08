import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PalleteColors from '../../../../../general_components/palleteColors';

export default function TrainerContact() {
    return (

            <TouchableOpacity style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', backgroundColor: PalleteColors.secondColor, justifyContent: "space-between", padding: 10, margin: 10, borderRadius: 10}}>
                <Text style={{fontFamily: 'poppins-bold', fontSize: 15, color: "white"}}>Contacta con Jose</Text>
                <Ionicons name="ios-chatbubbles" size={30} color="white"></Ionicons>
            </TouchableOpacity>

    )
}
