import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Picker, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import apiClientRutine from '../../../../api/apiClientRutine'
import useApiCallback from '../../../../customHooks/useApiCallback'
import GeneralContainer from '../../../general_components/generalContainer'
import PalleteColors from '../../../general_components/palleteColors'
import Title from '../../../general_components/title'
import Excersise from './rutine/excersise'
import ExcersiseGroup from './rutine/excersiseGroup'
import Loading from '../../../general_components/loading'


export default function Rutine() {

    const rutine = useApiCallback(apiClientRutine.getRutine, (data) => { setDay(data.rutine_days[0].id) })
    const dayData = useApiCallback(apiClientRutine.getRutineDay, (data) => setRefreshing(false))
    const [day, setDay] = useState()
    const [refreshing, setRefreshing] = useState(false) 

    useEffect(() =>
    {
        rutine.request()
    },[])

    useEffect(() => {
        if(day != undefined){
           console.log("hello")
           dayData.request(day) 
        }
    }, [day])
    
    const onRefresh = () => {
        setRefreshing(true)
        if(day != undefined){
           dayData.request(day) 
        }
    }
    
    if(!rutine.loading && !dayData.loading){
    return (
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>}>
            <GeneralContainer style={{marginBottom: 70}}>
                <View style={{backgroundColor: PalleteColors.mainColor, color : "white", borderRadius: 10, marginTop: 15}}>
                    <Picker style={{color: "white", fontFamily: "poppins-regular"}} selectedValue = {day} onValueChange={(itemValue, itemIndex) => setDay(itemValue)}>

                        { 

                            rutine.data.rutine_days.map((obj) => <Picker.Item key={obj.id} label={obj.name} value={obj.id} />)
                        
                        }
                    </Picker>
                </View>
                
                {
                    dayData.loading ? null : dayData.data.rutine_groups ? dayData.data.rutine_groups.map((obj) => <ExcersiseGroup key={obj.id} obj={obj}></ExcersiseGroup>) : null
                }
            </GeneralContainer>
        </ScrollView>

    )}else{
        return <Loading/>;
    }
}
