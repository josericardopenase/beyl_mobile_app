import { Picker } from '@react-native-community/picker'
import React, { useEffect, useState } from 'react'
import { View, Text, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import apiClientDiet from '../../../../api/apiClientDiet'
import useApi from '../../../../customHooks/useApi'
import useApiCallback from '../../../../customHooks/useApiCallback'
import ErrorApi from '../../../general_components/error_handling/errorApi'
import GeneralContainer from '../../../general_components/generalContainer'
import Loading from '../../../general_components/loading'
import PalleteColors from '../../../general_components/palleteColors'
import Launch from './diet/launch'

export default function Diet() {
    
    const diet = useApiCallback(apiClientDiet.getDiet, (data) => { setDay(data.diet_days[0].id)  })
    const dayData = useApiCallback(apiClientDiet.getDietDay, (data) => setRefreshing(false))
    const [day, setDay] = useState()
    const [refreshing, setRefreshing] = useState(false) 

    useEffect(() => {

        diet.request();

    }, [])

    useEffect(() =>{
        if(day != undefined){
            dayData.request(day);
        }
    }, [day])

    const onRefresh = () => {
        setRefreshing(true)
        if(day != undefined){
           dayData.request(day) 
        }
    }

    if(diet.error || day === undefined ){
            return <ErrorApi error={"Tu dieta no esta disponible espera que tu entrenador la termine"}></ErrorApi>
    }

    if(diet.loading | dayData.loading){
        return <Loading></Loading>
    }

    console.log(day)

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
