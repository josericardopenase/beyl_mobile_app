import React from 'react';
import { View, Text } from 'react-native';
import Title3 from '../../../../../general_components/titles/title3';
import Feather from 'react-native-vector-icons/Feather';
import PalleteColors from '../../../../../general_components/palleteColors';
import Bold from '../../../../../general_components/titles/bold';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ActivitieDisplay({name, emoji}) {

    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ActivitieProgress', {emoji : emoji, name : name})} style={{flexDirection: "row", justifyContent: "space-between", padding: 14, borderBottomColor: "#e5e5e5", borderBottomWidth: 1, alignItems: "center"}}> 
            <Title3 primary={true}><Bold>{emoji} {name}</Bold></Title3> 
             <Feather name={"arrow-right"} size={20} color={PalleteColors.textSecondaryColor}></Feather>
     </TouchableOpacity>
  );
}
