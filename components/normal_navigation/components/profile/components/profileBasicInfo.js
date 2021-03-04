import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import apiSettings from '../../../../../api/apiSettings'
import PalleteColors from '../../../../general_components/palleteColors'
import ProfileImage from '../../../../general_components/profileImage'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function ProfileBasicInfo({user}) {

    const navigation = useNavigation();



    return (
        <View style={styles.profile}>

        <ProfileImage size={90} url={user.profile_pic}></ProfileImage>

        <View style={styles.profileInfo}>

            <Text style={{fontFamily:  "poppins-bold", fontSize: 17 , color: PalleteColors.textPrimaryColor}}>{user.first_name + " " + user.last_name}</Text>
            
            <Text style={{fontFamily:  "poppins-regular", fontSize: 14, color: PalleteColors.textSecondaryColor }}>{user.email}</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>

                <Text style={{marginRight: 10, color: "white", textAlign: "center", fontFamily: "poppins-regular", fontSize: 12}}>Ajustes</Text>
                <MaterialCommunityIcons name={"settings"} color="white" size={15}></MaterialCommunityIcons>

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
        backgroundColor: PalleteColors.background,
        padding: 3,
        borderRadius: 5,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }

})