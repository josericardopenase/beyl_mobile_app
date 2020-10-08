import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeCategorie() {
    return (
        <View style={{marginRight: 20}}>
            <View style={styles.wrapper}><Ionicons name="ios-home" size={30} color={"white"}></Ionicons></View>
            <Text style={styles.text}>Hipertrofia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper : {
        borderRadius: 20,
        backgroundColor: "#FFC600",
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    text : {
        fontSize: 10,
        marginTop: 5,
        fontFamily: "poppins-bold",
        color: "grey"
    }
})
