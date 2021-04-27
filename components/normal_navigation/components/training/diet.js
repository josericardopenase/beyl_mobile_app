import { Picker } from '@react-native-community/picker'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native'
import apiClientDiet from '../../../../api/apiClientDiet'
import useApi from '../../../../customHooks/useApi'
import useApiCallback from '../../../../customHooks/useApiCallback'
import ErrorApi from '../../../general_components/error_handling/errorApi'
import GeneralContainer from '../../../general_components/generalContainer'
import Loading from '../../../general_components/loading'
import PalleteColors from '../../../general_components/palleteColors'
import Launch from './diet/launch'
import * as Notifications from 'expo-notifications';

export default function Diet() {
    
    const diet = useApiCallback(apiClientDiet.getDiet, (data) => { 
        
		if (data.diet_days !== undefined) if (data.diet_days.length > 0) if(data.diet_days[0] !== undefined) return setDay(data.diet_days[0].id);

        setRefreshing(false);
        setDay(undefined)  
    
    })
    const dayData = useApiCallback(apiClientDiet.getDietDay, (data) => setRefreshing(false))
    const [day, setDay] = useState()
    const [refreshing, setRefreshing] = useState(false) 

    const notificationListener = useRef();
    const responseListener = useRef()


    const reloadDiet = () => {

        if(refreshing)
            return

        setRefreshing(true);

        diet.request()
        if(day != undefined){
            dayData.request(day) 
        }


    }


    useEffect(() =>
    {
        
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {

            const data = notification.request.content.data

            if(data){
                if(data.action === "reloadDiet"){
                    diet.request()
                    if(day != undefined){
                        dayData.request(day) 
                    }
                }
            }

        })

        diet.request()

    },[])

    useEffect(() =>{

        if(day != undefined){
            dayData.request(day) 
        }

    }, [day])

    const onRefresh = () => {
        setRefreshing(true)
        if(day != undefined){
           dayData.request(day) 
        }
    }

    if(diet.error || day === undefined || !dayData.data.diet_groups ){
        if (diet.error) return <ErrorApi loading={refreshing} onPress={reloadDiet} error={diet.data.detail} />;
        return <ErrorApi loading={refreshing} onPress={reloadDiet} error={"Tu dieta no está disponible espera que tu entrenador la termine"}></ErrorApi>
    }

    if(diet.loading | dayData.loading){
        return <Loading></Loading>
    }


    return (
    
        <ScrollView showsVerticalScrollIndicator={false} showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>} >
            
            <GeneralContainer style={{marginBottom : 50}}>
                
                <View style={{backgroundColor: PalleteColors.mainColor, color : "white", borderRadius: 10, marginTop: 15}}>
                    <Picker style={{color: "white", fontFamily: "poppins-regular"}} selectedValue = {day} onValueChange={(itemValue, itemIndex) => setDay(itemValue)}>

                        {
                           diet.data.diet_days.map((obj) => <Picker.Item label={obj.name} value={obj.id} key={obj.id} />)
                        }    

                    </Picker>
                </View>

                {
                   dayData.data.diet_groups.map((obj) => <Launch obj={obj} key={obj.id}></Launch>) 
                }
            </GeneralContainer>

        </ScrollView>
    )
}
