import React from 'react'
import { View, Text, Image } from 'react-native'
import Bold from '../titles/bold'
import Title2 from '../titles/title2'
import Title3 from '../titles/title3'

export default function ErrorApi({error}) {
    return (
        <View style={{flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column", padding: 10}}>
            <Image source={require('../../../assets/error.png')} style={{width: '70%', resizeMode: "contain", height: 220, marginBottom: 20}}/>
            <Title2><Bold>Vaya...</Bold></Title2> 
            <Title3 style={{marginBottom: 46}} textAlign="center">{error}</Title3>
        </View>
    )
}
