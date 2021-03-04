import React from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PalleteColors from '../palleteColors'

export default function FormButton({background, placeholder, color, icon, onPress, borderRadius, loading}) {
    return (
        <TouchableOpacity style={{backgroundColor: background ? background : PalleteColors.mainColor, 
                                  padding: 14,
                                  borderRadius: borderRadius ? borderRadius : 50,
                                  alignItems: "center",
                                  marginTop: 15,
                                  flexDirection: "row",
                                  width: "100%",
                                  justifyContent: "center"}} onPress={() => onPress()}>
            {
                icon
            }


            {
            loading ?

                <ActivityIndicator size="small" style={{padding: 2}} color="white"></ActivityIndicator>

            :

            <Text style={{color: color ? color : "white", fontFamily: "poppins-bold", marginLeft: icon ? 20 : 0}}>{placeholder}</Text>
            }

        </TouchableOpacity>
    )
}
