import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../general_components/generalContainer'
import Title from '../../../general_components/title'
import DietDays from './diet/dietDays'

export default function Diet() {
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            
            <GeneralContainer style={{marginBottom : 50}}>
                
                <DietDays></DietDays>

            </GeneralContainer>

        </ScrollView>
    )
}
