import React, { useContext } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import storage from '../../../../auth/storage'
import useAuth from '../../../../auth/useAuth'
import FormButton from '../../../general_components/forms/FormButton'
import GeneralContainer from '../../../general_components/generalContainer'
import GeneralSafeAreaView from '../../../general_components/generalSafeAreaView'
import PalleteColors from '../../../general_components/palleteColors'
import Title3 from '../../../general_components/titles/title3'
import ProfileBasicInfo from './components/profileBasicInfo'
import ProfileDetailInfo from './components/profileDetailInfo'
import ProfileImageInfo from './components/profileImageInfo'

export default function Profile() {
    
    const context = useAuth();

    const logOut = async () => {
        await storage.removeUser();
        context.setUser(null);
    }

    return (
        <ScrollView style={{marginBottom: 30}}>
            <GeneralSafeAreaView>
                <GeneralContainer>

                    <ProfileBasicInfo user={context.user}/>

                    <View style={{marginTop: 20}}>
                        <ProfileDetailInfo/>
                        <FormButton placeholder="Log out" onPress={logOut}></FormButton>
                    </View>
                </GeneralContainer>
            </GeneralSafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    profile : {
        flexDirection: "row"
    },
    profileInfo : {
        marginLeft: 20
    },
    button: {
        width: "100%",
        backgroundColor: PalleteColors.secondColor,
        padding: 3,
        borderRadius: 5,
        marginTop: 10
    }


})