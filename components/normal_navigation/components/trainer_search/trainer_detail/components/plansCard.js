import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import GeneralContainer from '../../../../../general_components/generalContainer'
import PlansText from './plansCards/plansText';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function PlansCard(props) {

    const styles = StyleSheet.create({
        container: {
            backgroundColor:  "white",
            borderRadius: 10,
            width: props.width
        },
        headerContainer : {
            flexDirection: "row",
            padding: 20,
            alignItems: "center"
        },
        headerImage:{
            borderRadius: 10,
            width: 60,
            height: 60,
            backgroundColor: "grey"
        },
        textHeader:{
            marginLeft: 20
        }
    })

    return (

            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={styles.headerImage}></Image>
                    <View style={styles.textHeader}>
                    
                        <Text style={{fontFamily: "poppins-bold", fontSize: 20}}>Basico</Text>
                        <Text style={{fontFamily: "poppins-bold", fontSize: 18, color: "grey" }}>24$</Text>


                    </View>
                </View>



                <View style={{padding: 20}}>

                    <PlansText>Hablar conmigo</PlansText>
                    <PlansText>Entrenamiento personalizado</PlansText>
                    <PlansText>3 mesajes al dia</PlansText>
                    <PlansText>Mejorar tu estado fisico</PlansText>
                    <PlansText>Estar mamadisimo</PlansText>

                </View>

                <TouchableOpacity style={{ backgroundColor: "#FFC600", margin: 10, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20}}>
                    <Text style={{fontSize: 20, fontFamily: "poppins-bold", color: "white"}}>Comprar</Text>
                    <Ionicons name={"ios-arrow-forward"} color="white" size={30} ></Ionicons>
                </TouchableOpacity>
            </View>

    )
}


