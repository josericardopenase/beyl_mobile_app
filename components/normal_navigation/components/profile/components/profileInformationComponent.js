import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PalleteColors from '../../../../general_components/palleteColors';

export default function ProfileInformationComponent({icon, data, title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data}</Text>
            
            <Text style={{textAlign: "center", color: "grey", fontFamily: "poppins-regular", fontSize: 12, margin: 5}}>{title}</Text>

            <MaterialIcon name={icon} style={{position: "absolute", bottom: 0, right: 0, margin: 10}} size={16} color={PalleteColors.mainColor}></MaterialIcon>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        margin: 5, 
        backgroundColor: "white", 
        padding: 10, 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 10,
        position: "relative"

    },
    title : {
        fontFamily: "poppins-bold",
        fontSize: 20
    }
})