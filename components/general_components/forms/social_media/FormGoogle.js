import React from 'react'
import { View, Text, Image } from 'react-native'
import FormButton from '../FormButton'

export default function FormGoogle({onPress}) {
    return (
        <FormButton placeholder="Continuar con Google" onPress={onPress} background="#4285F4" icon ={
            <Image source={require('../../../../assets/google.png')} style={{width: 25.83, height: 25.125}}></Image>
        }/>
    )
}