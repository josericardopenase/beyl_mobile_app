import React from 'react';
import { View, Text } from 'react-native';
import PalleteColors from '../../../../../general_components/palleteColors';
import Title5 from '../../../../../general_components/titles/title5';

export default function ActivitieHeader({name}) {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", paddingRight: 14, paddingLeft: 14, paddingTop: 7, paddingBottom: 7, borderBottomColor: PalleteColors.textSecondaryColor, borderBottomWidth: 1, alignItems: "center"}}>
       <Title5 primary={false}>{name}</Title5> 
     </View>
  );
}
