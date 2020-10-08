import { noAuto } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import PalleteColors from '../../../../general_components/palleteColors';
import TrainerTags from './trainerTags';

export default function HomeTrainerBox({navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('TrainerDetail')} activeOpacity={1} >
        <View style={styles.container}>
            {/* PROFILE */}
            <View style = {styles.profile}>
                <Image style = {styles.profilePic} source={{uri: 'https://scontent.flpa1-1.fna.fbcdn.net/v/t1.0-9/28378387_194319104495670_684902334457788365_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=54lYhEI9nSUAX_hXtrD&_nc_ht=scontent.flpa1-1.fna&oh=71bbe7e699efd603543c170ca2d000e4&oe=5F84A6EF'}}/>

                <View>
                    <Text style={{fontFamily: "poppins-bold", color: PalleteColors.secondColor}}>Sergio Begueria</Text>
                    <Text style={{marginTop: -1, fontSize: 12, color: "grey"}}>@Joseli.coe</Text>
                </View>
            </View>

           {/*  PICTURES */}
            <Image style={styles.pictures} source={{uri: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118472059_269837497421879_5727021323843125690_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ThaRlrl6-RgAX-Ldxxd&oh=5641cb72a8b9a80f56de0fc1e591597d&oe=5F8836F7'}}>

            </Image>
            
            {/* ICONS AND DESCRIPTION */}
            <View style={styles.iconsContainer}>
                <View style={{flexDirection: "row"}}>
                    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "#f5f5f5", paddingTop: 5, paddingBottom: 5, paddingLeft: 9, paddingRight: 9, borderRadius: 10}}>
                        <Icon name="ios-heart"  size={21} color="red"></Icon>
                        <Text style={{marginLeft: 8}}>199</Text>
                    </View>


                    
                    <View style={{flexDirection: "row", alignItems: "center", marginLeft: 15}}>
                        <Icon name="ios-star" size={21} color="orange"></Icon>
                        <Text style={{marginLeft: 8}}>4.7</Text>
                    </View>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginLeft: 15, backgroundColor: PalleteColors.secondColor, paddingTop: 5, paddingBottom: 5, paddingLeft: 9, paddingRight: 9, borderRadius: 10}}>
                    <Icon name="ios-cart" size={21} color="white"></Icon>
                    <Text style={{marginLeft: 8, color: "white"}}>desde 47$/mes</Text>
                </View>


            </View>

            <Text style={{fontSize: 12, marginTop: 10, color: "grey", textAlign: "justify"}}>
            descripcion descripcionadfs descripciónasdf descripcion descripcion  descripción descripcio descripcion descripción   descripción descripcio descripcion descripción  
            </Text>

            {/* TRAINER TAGS */}
            <View style={{flexDirection: 'row', flexWrap:"wrap"}}>

                <TrainerTags></TrainerTags>

            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container : {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 30,
        padding: 10,
        marginBottom: 60

    },
    profile:{
        flexDirection: "row",
        alignItems: "center"
    },
    profilePic:{
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 18
    },
    pictures : {
        marginTop: 20,
        width: "100%",
        height: 340,
        borderRadius: 20,
  

    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 14
    },
    tag: {
        fontSize: 11, 
        backgroundColor: "#FFB9B9", 
        color: "#FF5353", 
        fontFamily: "poppins-regular", 
        paddingTop: 2, 
        paddingBottom: 2, 
        paddingRight: 15, 
        paddingLeft: 15, 
        borderRadius: 100, 
        marginRight: 10, 
        marginTop: 10}
})