import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PalleteColors from '../../../../general_components/palleteColors';

export default function ProfileInformationComponent({icon, data, title, onPress}) {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={onPress} style={{padding: 10, alignItems: "center"}} underlayColor={"transparent"}>
                <>
                <Text style={styles.title}>{data}</Text>
                
                <Text style={{textAlign: "center", color: PalleteColors.textSecondaryColor, fontFamily: "poppins-regular", fontSize: 12, margin: 5}}>{title}</Text>

                </>
            </TouchableHighlight>
                <MaterialIcon name={icon} style={{position: "absolute", bottom: 0, right: 0, margin: 10}} size={16} color={PalleteColors.mainColor}></MaterialIcon>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        margin: 5,
        flex: 1,
        backgroundColor: PalleteColors.background, 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 10,
        position: "relative",

    },
    title : {
        fontFamily: "poppins-bold",
        fontSize: 20,
        color: PalleteColors.textPrimaryColor
    }
})