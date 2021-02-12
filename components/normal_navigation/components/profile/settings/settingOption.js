import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import PalleteColors from '../../../../general_components/palleteColors';
import Bold from '../../../../general_components/titles/bold';
import Title3 from '../../../../general_components/titles/title3';

export default function SettingOption({children, icon, onPress}) {
    return (
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", paddingTop: 10, paddingBottom: 10}} onPress={onPress}>
            <FontAwesome name={icon} size={30} color={PalleteColors.textPrimaryColor}></FontAwesome>
            <Title3 style={{marginLeft: 10}} primary={true}><Bold>{children}</Bold></Title3>
        </TouchableOpacity>
    )
}
