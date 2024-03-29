import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GeneralContainer from '../../../../general_components/generalContainer';
import PalleteColors from '../../../../general_components/palleteColors';
import ExcersiseDetail from '../excersiseDetail';
import Food from './food';
import Recipe from './recipe';

export default function Launch({obj}) {

    const [enabled, setEnabled] = useState(false)

    const styles = StyleSheet.create({
        container : {
            padding: 10,
            backgroundColor: enabled ? PalleteColors.mainColor : PalleteColors.background , 
            borderRadius: 10, 
            marginTop: 10,

        },
        title: {
            fontFamily: "poppins-bold",
            fontSize: 21, 
            marginLeft: 10,
            color: enabled ? "white" : PalleteColors.textPrimaryColor,
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
                        <Text style={styles.title}>{obj.name}</Text>
                    </View>
                    
                    <MaterialIcons name={ enabled ? "arrow-down" : "arrow-right"} size={30} color={ enabled ? "white" : PalleteColors.textPrimaryColor}></MaterialIcons>
                
                </View>
                </TouchableOpacity>

{/*                 This is when the diet group is open */}
                {enabled ? (
                <GeneralContainer>
                    {
                        obj.diet_food.map((obj) => <Food key = {obj.id} obj={obj}></Food>)
                    }
                    {
                        obj.diet_recipes.map((obj) => <Recipe  key = {obj.id} obj={obj}></Recipe>)
                    }
                </GeneralContainer>
                )
                : null}

{/*                 This is when the diet group is open */}

            </View>


    )
}

