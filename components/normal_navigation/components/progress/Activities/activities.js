import React from 'react';
import { View, Text } from 'react-native';
import GeneralContainer from '../../../../general_components/generalContainer';
import ActivitieDisplay from './Components/activitieDisplay';
import { ScrollView } from 'react-native-gesture-handler';
import ActivitieHeader from './Components/activitieHeader';

export default function Activities() {
  return (
    <GeneralContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ActivitieHeader name="LO MÁS POPULAR"></ActivitieHeader>
        <ActivitieDisplay emoji="🏋️‍♂️" name="Entrenamiento"></ActivitieDisplay>
        <ActivitieDisplay emoji="🍜" name="Cheatmeal"></ActivitieDisplay>

        <ActivitieHeader name="DEPORTES"></ActivitieHeader>
        <ActivitieDisplay emoji="🏃‍♂️" name="Correr"></ActivitieDisplay>
        <ActivitieDisplay emoji="🚴‍♀️" name="Ciclismo"></ActivitieDisplay>
        <ActivitieDisplay emoji="⚽" name="Fútbol"></ActivitieDisplay>
        <ActivitieDisplay emoji="‍️🏊" name="Natacion"></ActivitieDisplay>
        <ActivitieDisplay emoji="🧘" name="Yoga"></ActivitieDisplay>
        <ActivitieDisplay emoji="🚶‍♂️" name="Cardio"></ActivitieDisplay>
        <ActivitieDisplay emoji="💞" name="Actividad sexual"></ActivitieDisplay>
        <ActivitieDisplay emoji="🔫" name="Otro"></ActivitieDisplay>
      </ScrollView>
     </GeneralContainer>
  );
}
