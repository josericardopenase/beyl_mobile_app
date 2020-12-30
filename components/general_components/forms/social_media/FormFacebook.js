import React from 'react'
import { View, Text, Image } from 'react-native'
import FormButton from '../FormButton'

export default function FormFacebook({onPress}) {
    return (
        <FormButton placeholder="Continuar con Facebook" background="#3A589B" onPress = {onPress} icon ={
            <Image source={require('../../../../assets/facebook.png')} style={{width: 12, height: 25.125, marginLeft: 10}}></Image>
        } />
    )
}
