import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import apiSettings from '../../../../../api/apiSettings';

export default function Recipe({obj}) {

    const nav = useNavigation()

    return (
        <TouchableOpacity onPress={() => nav.navigate('RecipeDetail', {"recipe" : obj.id}) }>
            <View style = {styles.container}>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image style={styles.image} source={{uri: apiSettings.url + obj.image }}></Image>
                    <Text style={{marginLeft: 10, fontFamily: "poppins-regular", fontSize: 15}}>{obj.name}</Text>
                </View>

                <MaterialIcons name={"arrow-right"} size={30}></MaterialIcons>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "white",
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