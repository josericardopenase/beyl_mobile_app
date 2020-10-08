import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import GeneralContainer from '../../../general_components/generalContainer'
import GeneralSafeAreaView from '../../../general_components/generalSafeAreaView'
import PalleteColors from '../../../general_components/palleteColors'
import ProfileImage from '../../../general_components/profileImage'
import Subtitle from '../../../general_components/subtitle'
import ProfileCarousel from '../trainer_search/trainer_detail/components/profileCarousel'
import ProfileBasicInfo from './components/profileBasicInfo'
import ProfileDetailInfo from './components/profileDetailInfo'
import ProfileImageInfo from './components/profileImageInfo'

export default function Profile() {
    return (
        <ScrollView style={{marginBottom: 30}}>
            <GeneralSafeAreaView>
                <GeneralContainer>

                    <ProfileBasicInfo/>

                    <ProfileDetailInfo/>
                    
                    <ProfileImageInfo title='Mi objetivo' description= 'Ganar masa muscular' image = 'https://img.redbull.com/images/c_crop,x_0,y_0,h_2533,w_3800/c_fill,w_860,h_573/q_auto,f_auto/redbullcom/2018/05/15/36f524f6-9d50-4c9d-bbce-8555ed10c8c2/salud-consejos-levantamiento-pesas' color= "#a6c8ff"/>
                    <ProfileImageInfo title='Edad' description= '18 años' image = 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/03/11/15523046819457.jpg' color= "#fa6b6b"/>

                    
                    <ProfileCarousel></ProfileCarousel>
                </GeneralContainer>
            </GeneralSafeAreaView>
        </ScrollView>
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