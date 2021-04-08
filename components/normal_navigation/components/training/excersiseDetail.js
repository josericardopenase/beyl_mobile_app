import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import GeneralContainer from '../../../general_components/generalContainer'
import Title from '../../../general_components/title'
import PalleteColors from '../../../general_components/palleteColors';
import Subtitle from '../../../general_components/subtitle';
import RutineDetailText from './rutine/rutineDetailText';
import ExcersisePuntuation from './rutine/excersisePuntuation';
import ExcersiseName from './rutine/excersiseName';
import ExcersiseBlockPuntuation from './rutine/excersiseBlockPuntuation';
import ExcersiseBlockMuscles from './rutine/excersiseBlockMuscles';
import ExcersiseBlockDescription from './rutine/excersiseBlockDescription';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import useApi from '../../../../customHooks/useApi';
import apiExcersise from '../../../../api/apiExcersise';
import Loading from '../../../general_components/loading';
import apiClient from '../../../../api/apiClient';
import apiSettings from '../../../../api/apiSettings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ExcersiseDetail(props) {


    const id = props.route.params.id;
    const excersise = useApi(apiExcersise.getExercise)
    const navigation = useNavigation()

    useEffect(() => {
        excersise.request(id);
        console.log(excersise.data)
    }, [])

    if(excersise.loading){
        return <Loading></Loading>
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={{width: "100%", height: 410}} source={{uri:  excersise.data.image}}></Image>
            
            <View style={Styles.container}>

                <GeneralContainer>

                    {

                        excersise.data.video ?

                     <View style={{position: "absolute", display: "flex", marginTop: -50, alignSelf: "center"}}>
                        <TouchableOpacity style={{width: 80, height: 80, backgroundColor: PalleteColors.mainColor, alignSelf: "center", justifyContent: "center",  borderRadius: 20}} onPress={() => navigation.navigate('ExcersiseVideo', {'video' : excersise.data.video})}>
                            <Ionicons name={"ios-play"} size={40} color="white" style={{alignSelf: "center"}}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    :
                    null
                    
                    }

                    <ExcersiseName name={excersise.data.name}></ExcersiseName>

                    <ExcersiseBlockPuntuation puntuation={excersise.data.difficult}></ExcersiseBlockPuntuation>

                    <ExcersiseBlockMuscles muscles = {excersise.data.muscles}></ExcersiseBlockMuscles>

                </GeneralContainer>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container : {
        borderRadius: 40, 
        backgroundColor: PalleteColors.background,
        marginTop: -40
    }
})