import React, { useState } from 'react'
import { View, Text } from 'react-native'
import FormInput from '../FormInput'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PalleteColors from '../../palleteColors';

export default function FormInputPassword({placeholder, ...otherProps}) {

    const [secure, setSecure] = useState(true);

    return (
        <View style={{position: "relative", justifyContent: "center"}}>
            <FormInput placeholder={placeholder} secureTextEntry={secure} icon="lock" {...otherProps}></FormInput>
            <MaterialIcon color={"#999999"} name={secure ? "eye" : "eye-off"} size={18} style={{
                position: "absolute", 
                alignSelf: "flex-end", 
                right: 10, bottom: 15, 
                backgroundColor: PalleteColors.backgroundSecondary}} onPress={() => setSecure(!secure)}></MaterialIcon>
        </View>
    )
}
