import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PalleteColors from '../../../../general_components/palleteColors'
import ProfileImage from '../../../../general_components/profileImage'

export default function ProfileBasicInfo() {
    return (
        <View style={styles.profile}>

        <ProfileImage size={90}></ProfileImage>

        <View style={styles.profileInfo}>

            <Text style={{fontFamily:  "poppins-bold", fontSize: 17 }}>Jose Ricardo Peña Seco</Text>
            
            <Text style={{fontFamily:  "poppins-regular", fontSize: 14, color: "grey" }}>jrpenaseco@gmail.com</Text>

            <TouchableOpacity style={styles.button}>

                <Text style={{color: "white", textAlign: "center", fontFamily: "poppins-regular", fontSize: 12}}>Modificar perfil</Text>

            </TouchableOpacity>

        </View>
        </View>

    )
}

const styles = StyleSheet.create({

    profile : {
        flexDirection: "row"
    },
    profileInfo : {
        marginLeft: 20
    },
    button: {
        width: "100%",
        backgroundColor: PalleteColors.secondColor,
        padding: 3,
        borderRadius: 5,
        marginTop: 10
    }

})