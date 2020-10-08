import { StatusBar } from 'expo-status-bar'
import React from 'react'
import ReactNative, {ScrollView } from 'react-native'
import GeneralContainer from '../../../general_components/generalContainer'
import Title from '../../../general_components/title'
import HomeSearch from './home/homeSearch'
import HomeTrainerBox from './home/homeTrainerBox'


export default function Home({navigation}) {

    

    return (
        <ScrollView style={{ flex: 1}} showsVerticalScrollIndicator={false}> 
           <GeneralContainer>
                <Title title={['Bienvenido,', ' Pepe 👋']}></Title>
                <HomeSearch></HomeSearch>
                <HomeTrainerBox navigation={navigation}></HomeTrainerBox>

           </GeneralContainer>
           
        </ScrollView>
    )
}
