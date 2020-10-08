import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TrainerPlans({navigation}) {
    return (

        <View style={{position: "absolute", minWidth: "100%", bottom: 0}}>

            <TouchableOpacity style={styles.touch} onPress={()=> navigation.push('TrainerPlans')}>

                      
                <Text style={styles.textPlans}>Ver planes</Text>
                <Ionicons name="ios-cart" color="white" size={30}></Ionicons>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    textPlans:{
        fontSize: 15,
        color: "white",
        fontFamily: "poppins-bold",
    },
    touch : {
        backgroundColor: '#FFC600',
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        padding: 10,
        margin: 5,
        borderRadius: 10,

    }
})