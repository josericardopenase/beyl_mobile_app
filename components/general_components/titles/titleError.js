import React from 'react'
import TitleBase from './titleBase'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View } from 'react-native';

export default function TitleError({error, visible}) {

    if(!error || !visible) return null;

    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <MaterialCommunityIcons name="bug" size={20} color="red" style={{marginRight: 5, marginTop: 5}}></MaterialCommunityIcons>
            <TitleBase color="red" marginTop={10} >{error}</TitleBase>
        </View>
    )
}
