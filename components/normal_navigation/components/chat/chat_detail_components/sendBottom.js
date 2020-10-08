import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SendBottom() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <MaterialIcon name="send" color="white" size={25}></MaterialIcon>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: PalleteColors.mainColor,
        height: 50,
        width: 50,
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center"
    }
})
