
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../general_components/generalContainer'
import Title from '../../../general_components/title'
import Apart from './chat_general_components/apart'
import ChatUser from './chat_general_components/chatUser'

export default function Chat() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <GeneralContainer>
             <Title title={['Mensajes', '']}></Title>
             <Apart>Tu entrenador</Apart>
             <ChatUser></ChatUser>

            </GeneralContainer>
        </ScrollView>
    )
}
