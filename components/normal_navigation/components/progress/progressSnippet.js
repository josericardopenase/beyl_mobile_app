import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import apiGeneralHistory from '../../../../api/apiGeneralHistory'
import useApiCallback from '../../../../customHooks/useApiCallback'
import Loading from '../../../general_components/loading'
import Title3 from '../../../general_components/titles/title3'
import ProgressBox from './history/progressBox'
import EventBus from 'eventing-bus'
import { ADDED_ACTIVITIE } from '../../../../events/events'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PalleteColors from '../../../general_components/palleteColors'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import MessageBox from '../../../general_components/messageBox'

export default function ProgressSnippet() {


    const getActivitie = useApiCallback(apiGeneralHistory.getHistory, (data) => setActivities(data.results)); 
    const [activities, setActivities] = useState([]);
    const navigation = useNavigation();

    EventBus.on(ADDED_ACTIVITIE, (data) =>{
        setActivities([data, ...activities.filter((item , index)=> index !== 0)])
        console.log(activities)
    }) 

    useEffect(() => {
        getActivitie.request();
    }, [])



    if(getActivitie.loading)
        return <Loading></Loading>

    return (
        <View style={{marginBottom: 10}}>
            <Title3 primary={true} style={{marginBottom: 15}}>Tu actividad reciente</Title3>


            {
            activities != [] ?
            <>
            {activities.map((obj, index) => <ProgressBox obj={obj} key={index}></ProgressBox>)}

            <TouchableOpacity onPress={() => navigation.navigate("ProgressHistorial")} style={{backgroundColor: PalleteColors.background, padding: 15, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", alignContent: "center"}}>
                <Title3 primary={true}>Ver toda la actividad</Title3>
                <MaterialIcons name={"arrow-right"} size={30} color={  PalleteColors.textPrimaryColor}></MaterialIcons>
            </TouchableOpacity>
            </>
            :
            <MessageBox message={"No tienes actividad reciente"}></MessageBox>
            }
            

        </View>
    )
}
