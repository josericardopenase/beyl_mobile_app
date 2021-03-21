import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Bold from '../titles/bold'
import Title2 from '../titles/title2'
import Title3 from '../titles/title3'
import FormButton from '../forms/FormButton'

export default function ErrorApi({error, onPress, loading}) {
    return (
        <View style={{flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column", padding: 10}}>
            <Image source={require('../../../assets/error.png')} style={{width: '70%', resizeMode: "contain", height: 220, marginBottom: 20}}/>
            <Title2><Bold>Vaya...</Bold></Title2> 
            <Title3 style={{marginBottom: 26}} textAlign="center">{error}</Title3>
            <View>
            {
                onPress ?
                    <FormButton onPress={onPress} placeholder="Recargar" loading={loading}></FormButton>
                :
                null
            }
            </View>
        </View>
    )
}
