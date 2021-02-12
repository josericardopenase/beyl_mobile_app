import React from 'react'
import { View, Text } from 'react-native'
import GeneralContainer from '../../../general_components/generalContainer'
import Subtitle from '../../../general_components/subtitle'
import Title from '../../../general_components/title'
import TrainersList from './components/trainersList'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Rutine from './rutine'
import Diet from './diet'
import PalleteColors from '../../../general_components/palleteColors'

const Tab = createMaterialTopTabNavigator();

export default function Training() {
    return (
        <Tab.Navigator tabBarOptions={{
          indicatorStyle: {backgroundColor: PalleteColors.mainColor}, labelStyle: {fontFamily: "poppins-regular", fontSize: 12, margin: 0, textTransform: 'none' , color: PalleteColors.textPrimaryColor}, style: {elevation: 0, backgroundColor: PalleteColors.background}}} >
          <Tab.Screen name="Ejercicio" component={Rutine} options={{tabBarLabel: "Rutina"}}/>
          <Tab.Screen name="Dieta" component={Diet} />
        </Tab.Navigator>
    )
}
