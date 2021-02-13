
import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../general_components/generalContainer'
import Title from '../../../general_components/title'
import Title3 from '../../../general_components/titles/title3'
import Title2 from '../../../general_components/titles/title2'
import Apart from './chat_general_components/apart'
import ChatUser from './chat_general_components/chatUser'
import Bold from '../../../general_components/titles/bold'

export default function Chat() {
    return (


                <View style={{flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column", padding: 10}}>

                    <Image source={require('../../../../assets/NotFoundImg.png')} style={{width: '70%', resizeMode: "contain", height: 220, marginBottom: 20}}/> 
                    <Title2><Bold>Vaya...</Bold></Title2> 
                    <Title3 style={{marginBottom: 46}} textAlign="center">El chat con tu entrenador no estara disponible por ahora</Title3>

                </View>

    )
}
