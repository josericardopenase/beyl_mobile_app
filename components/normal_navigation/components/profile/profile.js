import { EventBusy } from '@material-ui/icons'
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import apiProfile from '../../../../api/apiProfile'
import useProfile from '../../../../auth/useProfile'
import useApiCallback from '../../../../customHooks/useApiCallback'
import FormButton from '../../../general_components/forms/FormButton'
import GeneralContainer from '../../../general_components/generalContainer'
import GeneralSafeAreaView from '../../../general_components/generalSafeAreaView'
import Loading from '../../../general_components/loading'
import PalleteColors from '../../../general_components/palleteColors'
import Title3 from '../../../general_components/titles/title3'
import ProfileBasicInfo from './components/profileBasicInfo'
import ProfileDetailInfo from './components/profileDetailInfo'
import ProfileImageInfo from './components/profileImageInfo'
import EventBus from 'eventing-bus';
import ProgressSnippet from '../progress/progressSnippet'
import { MODIFIED_PROFILE } from '../../../../events/events'

export default function Profile() {
    
    const [profile, setProfile] = useState(null);
    const getProfile = useApiCallback(apiProfile.getProfile, (data) => setProfile(data))

    EventBus.on(MODIFIED_PROFILE,  (data) => getProfile.request())

    useEffect(() => {
        getProfile.request()

        return () => {
            EventBus.unregisterAllCallbacks()
        }

    }, [])


    if(getProfile.loading){
        return <Loading></Loading>
    }


    return (
        <ScrollView style={{marginBottom: 30}}>
            <GeneralSafeAreaView>
                <GeneralContainer>
                   <ProfileBasicInfo user={profile}></ProfileBasicInfo>

                    <View style={{marginTop: 20, marginBottom: 60}}>
                        <ProfileDetailInfo/>
                        <View style={{marginTop: 20}}>
                            <ProgressSnippet></ProgressSnippet>
                        </View>
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