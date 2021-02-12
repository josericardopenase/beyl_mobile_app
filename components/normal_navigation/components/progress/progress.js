import React from 'react';
import { View, Text } from 'react-native';
import GeneralContainer from '../../../general_components/generalContainer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PalleteColors from '../../../general_components/palleteColors';
import Activities from './Activities/activities';
import Weight from './Weight/weight';

const Tab = createMaterialTopTabNavigator();

export default function Progress() {
  return (
        <Tab.Navigator tabBarOptions={{
          indicatorStyle: {backgroundColor: PalleteColors.mainColor}, labelStyle: {fontFamily: "poppins-regular", fontSize: 12, margin: 0, textTransform: 'none' , color: PalleteColors.textPrimaryColor}, style: {elevation: 0, backgroundColor: PalleteColors.background}}} >
          <Tab.Screen name="Peso" component={Weight}/>
          <Tab.Screen name="Actividades" component={Activities} />
        </Tab.Navigator>
  );
}
