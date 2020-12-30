
import React, { useState } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import apiSettings from '../../../../../api/apiSettings'
import GeneralContainer from '../../../../general_components/generalContainer'
import PalleteColors from '../../../../general_components/palleteColors'
import Bold from '../../../../general_components/titles/bold'
import Title3 from '../../../../general_components/titles/title3'
import ExcersiseOpen from './excersiseOpen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'

export default function ExcersiseMultiple({obj}) {

    const navigation = useNavigation();

    return (
        <View style={{backgroundColor: PalleteColors.background, padding: 15, borderRadius: 20,  marginTop: 15}}>
        <Title3><Bold>Superserie</Bold></Title3>
        <Text style={{fontFamily: "poppins-bold", color: PalleteColors.mainColor}}>{obj.series}</Text>

        { obj.excersise.map((obj, i, arr) => (
            <>
                <ImageBackground style={{marginTop: 10}} imageStyle = {{borderRadius: 20}} source={{uri: apiSettings.url + obj.image}} >
                    <View style={{  backgroundColor: "rgba(0, 0, 0, 0.50)", borderRadius: 20,  padding: 15, flexDirection: "column"}}>
                        <TouchableOpacity
                        onPress= {
                            () => navigation.navigate('RutineDetail', {id: obj.id})
                        }
                        >
                            
                            <View style={{ margin: 10, flex: 1}}>
                                <Text style={{fontSize: 18, fontFamily: "poppins-bold", color: 'white'}}>{obj.name}</Text>
                            </View>

                        </TouchableOpacity>

                    </View>

                </ImageBackground>

                { arr.length - 1 !== i ? <MaterialIcon name="plus" size={30} style={{marginTop: 10, alignSelf: "center"}}></MaterialIcon> : null }
            </>
            )
        )}
        </View>
    )
}