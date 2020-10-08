import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PalleteColors from '../../../../../../general_components/palleteColors';

export default function CommentsBox(props) {
    return (
        <View style={{backgroundColor: "#f5f5f5", borderRadius: 10, padding: 10, width: props.width, marginRight: 10, marginLeft: 10}}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <View style={styles.profile}>
                    <Image style={styles.profilePic} source={{uri: 'https://scontent.flpa1-1.fna.fbcdn.net/v/t1.0-9/28378387_194319104495670_684902334457788365_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=54lYhEI9nSUAX_hXtrD&_nc_ht=scontent.flpa1-1.fna&oh=71bbe7e699efd603543c170ca2d000e4&oe=5F84A6EF'}}></Image>
                    <Text style={styles.name}>Jose Ricardo Peña</Text>
                </View>

                <View style={styles.profile}>
                    <Text style={{marginRight: 7}}>4</Text>
                    <Ionicons name={"ios-star"} size={20} color={PalleteColors.mainColor} ></Ionicons>
                </View>
            </View>
            <Text style={{color: "grey"}}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    profile : {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center"
    },
    profilePic : {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    name : {
        marginLeft: 10,
        fontFamily: "poppins-bold",
        color : "grey"

    }
    
})