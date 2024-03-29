import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import PalleteColors from '../../../../general_components/palleteColors'
import SendBottom from './sendBottom'

export default function SendMessage() {



    return (
        <View style = {styles.container}>
            <View style={{flexDirection: "row", margin: 10}}>
                <TextInput style={styles.writing} placeholder="Escribe un mensaje" placeholderTextColor={PalleteColors.textPrimaryColor}></TextInput>
                <SendBottom></SendBottom>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        position: "absolute",
        bottom: 0,
        width: "100%",
        
    },
    writing : {
        backgroundColor: PalleteColors.background,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        padding: 10,
        color: PalleteColors.textPrimaryColor
    }
})