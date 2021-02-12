import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import PalleteColors from '../palleteColors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Input({placeholder, icon, secureTextEntry, ...otherProps}) {
    return (
        <View style={styles.container}>
            { icon &&  <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={PalleteColors.textSecondaryColor} ></MaterialCommunityIcons>}
            <TextInput style={styles.textInput} placeholderTextColor={PalleteColors.textPrimaryColor} placeholder={placeholder} secureTextEntry={secureTextEntry} {...otherProps}></TextInput>
        </View>
   )
}


const styles = StyleSheet.create({
    container : {
        width: "100%",
        backgroundColor: PalleteColors.backgroundSecondary,
        padding: 12,
        borderRadius: 10,
        fontFamily: "poppins-regular",
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginRight: 8
    },
    textInput: {
        fontSize: 14,
        fontFamily: "poppins-regular",
        width: "100%",
        color: PalleteColors.textPrimaryColor,
        paddingRight:30
        
    }

});