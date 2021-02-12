import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'

export default function Food(props) {

    const styles = StyleSheet.create({
        container : {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            backgroundColor: props.backgroundColor ? PalleteColors.backgroundSecondary: PalleteColors.background,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 10
        },
        image : {
            width: 50,
            height: 50,
            borderRadius: 10
        }
    })

    console.log(props.obj)

    return (
        <View style = {styles.container}>

            <View style={{flexDirection: "row", alignItems: "center"}}>

                <Text style={{marginLeft: 10, fontFamily: "poppins-regular", fontSize: 15, color: PalleteColors.textPrimaryColor}}>{props.obj.food.name}</Text>

            </View>

            <Text style={{color: PalleteColors.textPrimaryColor}}>{props.obj.portion_cuantity} {props.obj.portion_unity}</Text>

        </View>
    )
}

