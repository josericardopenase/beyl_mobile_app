import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'

export default function Message({message}) {

    

    const styles = StyleSheet.create({
        box : {
           padding: 10,
           backgroundColor: message.main ? '#fcdb81' : "white",
            maxWidth: "80%",
            margin: 10,
            borderRadius: 10, 
            color: "#4a4a4a",
            textAlign: message.main ? "right" : "left"
        },
        container : {
            width: "100%", 
            flexDirection: "row",
            justifyContent: message.main ? "flex-end" : "flex-start"
        }
    })

    
    return (
        <View style={styles.container}>
            <Text style={styles.box}>{message.content}</Text>
        </View>
    )
}

