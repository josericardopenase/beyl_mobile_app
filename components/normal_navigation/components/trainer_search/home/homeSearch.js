import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeSearch() {
    return (
        <View style={styles.searchBar}>
            <Ionicons name={"ios-search"} size={20} color="grey"></Ionicons>
            <TextInput placeholder="Busca tu entrenador..."  style={{paddingLeft: 10, width: "100%"}}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        width: "100%",
        backgroundColor: "white",
        paddingLeft: 20 ,
        paddingRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 10, 
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center"
    }
})
