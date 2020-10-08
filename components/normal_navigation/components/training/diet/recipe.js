import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Recipe() {

    const nav = useNavigation()

    return (
        <TouchableOpacity onPress={() => nav.navigate('RecipeDetail') }>
            <View style = {styles.container}>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image style={styles.image} source={{uri: 'https://www.recetasderechupete.com/wp-content/uploads/2019/08/Arroz-blanco-525x360.jpg ' }}></Image>
                    <Text style={{marginLeft: 10, fontFamily: "poppins-regular", fontSize: 15}}>Arroz blanco</Text>
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