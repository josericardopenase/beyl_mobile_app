import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import apiProfile from '../../../../../api/apiProfile'
import useApiCallback from '../../../../../customHooks/useApiCallback'
import BoxContainer from '../../../../general_components/containers/boxContainer'
import Loading from '../../../../general_components/loading'
import Bold from '../../../../general_components/titles/bold'
import Title3 from '../../../../general_components/titles/title3'
import ProfileInformationComponent from './profileInformationComponent'
import EventBus from 'eventing-bus'
import { ADDED_TRAINER, WEIGHT_MODIFIED } from '../../../../../events/events'
import TrainerInformation from './trainerInformation'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getIn } from 'formik'

export default function ProfileDetailInfo() {

    const [information, setInformation] = useState(null);
    const getInformation = useApiCallback(apiProfile.getProfileAthlete, (data) => {setInformation(data);})
    const navigation = useNavigation();


    EventBus.on(WEIGHT_MODIFIED,  (data) => setInformation({...information, weight: data}))
    EventBus.on(ADDED_TRAINER,  (data) => getInformation.loading ? null : getInformation.request())

    useEffect(() => {

        getInformation.request();

    }, [])

    if(getInformation.loading){
        return <Loading></Loading>
    }

    function getActivityLevel(activitie){

        switch(activitie){
            case 'ne':
                return "ninguna";
            case 'el':
                return "poca";
            case 'em':
                return "media";
            case 'ef':
                return "alta";
            case 'emf':
                return "muy alta";
        }

    }



    return (
        <>
            <BoxContainer title="Tu entrenador:">
                {
                    getInformation.data.trainer ?
                    <TrainerInformation trainer={getInformation.data.trainer.user}></TrainerInformation>
                    :
                    <TrainerInformation trainer={null}></TrainerInformation>
                }
            </BoxContainer>
            <BoxContainer title="Tus datos actuales:">


                <View style={{flexDirection: "row", marginTop: 10, justifyContent: "space-between", width: "100%", justifyContent: "space-between"}}>

                    <ProfileInformationComponent icon = "weight-kilogram" data= {Math.floor(information.weight*10)/10 + " kg"} title="peso" onPress={() => navigation.push("Progress")}></ProfileInformationComponent>
                    <ProfileInformationComponent icon = "human-male-height" data = {information.height +" m"} title="altura"></ProfileInformationComponent>
                    <ProfileInformationComponent icon = "soccer" data = {getActivityLevel(information.amount_excersise)} title="Actividad fisica"></ProfileInformationComponent>

                </View>
            </BoxContainer>
        </>
    )
}
