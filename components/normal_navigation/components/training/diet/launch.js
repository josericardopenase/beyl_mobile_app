import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GeneralContainer from '../../../../general_components/generalContainer';
import PalleteColors from '../../../../general_components/palleteColors';
import ExcersiseDetail from '../excersiseDetail';
import Food from './food';
import Recipe from './recipe';

export default function Launch() {

    const [enabled, setEnabled] = useState(false)

    const styles = StyleSheet.create({
        container : {
            padding: 10,
            backgroundColor: enabled ? PalleteColors.mainColor : "white" , 
            borderRadius: 10, 
            marginTop: 10,

        },
        title: {
            fontFamily: "poppins-bold",
            fontSize: 21, 
            marginLeft: 10,
            color: enabled ? "white" : PalleteColors.secondColor,
        },
        header :{
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent:"space-between"
        }
    })

    return (
 
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setEnabled(!enabled)}>
                <View style = {styles.header}>                
                
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <MaterialIcons name="food-croissant" size={60} color={ enabled ? "white" : PalleteColors.mainColor}></MaterialIcons>
                        <Text style={styles.title}>Desayuno</Text>
                    </View>
                    
                    <MaterialIcons name={ enabled ? "arrow-down" : "arrow-right"} size={30} color={ enabled ? "white" : PalleteColors.secondColor}></MaterialIcons>
                
                </View>
                </TouchableOpacity>

                {enabled ? (
                <GeneralContainer>
                    <Food></Food> 
                    <Food></Food> 
                    <Recipe></Recipe>
                </GeneralContainer>
                )
                : null}

            </View>


    )
}

