import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PalleteColors from '../../../../general_components/palleteColors';
export default function TrainingBottom(props) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={{flexDirection: "row", backgroundColor: "white", borderRadius: 20, padding: 10, alignItems: "center", marginTop: 20}} onPress = { () => navigation.navigate(props.page)}>
            <MaterialIcon name={props.icon} size={100} color={PalleteColors.mainColor}></MaterialIcon>
            <Text style={{fontFamily: "poppins-bold", color: PalleteColors.secondColor, fontSize: 25}}>{props.children}</Text>
        </TouchableOpacity >
    )
}
