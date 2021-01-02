import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '../../../../auth/useAuth'
import GeneralContainer from '../../../general_components/generalContainer'
import Title from '../../../general_components/title'

export default function Home() {

    const {user} = useAuth();

    return (
        <GeneralContainer>
            <Title title={["Bienvenido, " , user.first_name + " 👋"]}></Title>
        </GeneralContainer>
    )
}
