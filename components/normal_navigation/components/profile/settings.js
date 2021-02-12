import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import storage from '../../../../auth/storage'
import useAuth from '../../../../auth/useAuth'
import GeneralContainer from '../../../general_components/generalContainer'
import Bold from '../../../general_components/titles/bold'
import Title1 from '../../../general_components/titles/title2'
import Title3 from '../../../general_components/titles/title3'
import Title5 from '../../../general_components/titles/title5'
import SettingOption from './settings/settingOption'

export default function Settings() {

    const {setUser} = useAuth();


    const logOut = async () => {
        await storage.removeUser();
        setUser(null);

    }

    return (
        <GeneralContainer>
            <View style={{marginTop: 20, marginBottom: 20}}>

                <SettingOption icon="user-circle"> Cuenta</SettingOption>
                <SettingOption icon="fish">Alergias</SettingOption>

            </View>
            <TouchableOpacity onPress={()=> logOut()}>
                <Title3 color="#ffc600"><Bold>Cerrar sesion</Bold></Title3>
            </TouchableOpacity>
        </GeneralContainer>
    )
}
