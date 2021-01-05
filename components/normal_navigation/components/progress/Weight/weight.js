import React, { useState, useEffect } from 'react';
import { View, Text , StyleSheet} from 'react-native';
import GeneralContainer from '../../../../general_components/generalContainer';
import { BaseButton, TouchableOpacity } from 'react-native-gesture-handler';
import FormButton from '../../../../general_components/forms/FormButton';
import Feather from 'react-native-vector-icons/Feather';
import PalleteColors from '../../../../general_components/palleteColors';
import Title1 from '../../../../general_components/titles/title2';
import Bold from '../../../../general_components/titles/bold';
import apiUpdateWeight from '../../../../../api/apiUpdateWeight';
import useApiCallback from '../../../../../customHooks/useApiCallback';
import Loading from '../../../../general_components/loading';
import { useNavigation } from '@react-navigation/native';

export default function Weight() {
    

    //FIXME: REFACTORIZE THE CODE AND HOLD BUTTON BEHAVIUR

    const navigation = useNavigation()

    const [weight, setWeight] = useState(70.0)
    const [decimal, setDecimal] = useState(true)
    

    const get_weight = useApiCallback(apiUpdateWeight.getWeight, (data) => {setWeight(parseFloat(data.weight))})
    const post_weight = useApiCallback(apiUpdateWeight.postWeight, (data) => navigation.navigate('home'))

    useEffect(() => {
        get_weight.request()
    }, [])

    const weightDecimals = Math.floor(((weight - Math.floor(weight)) * 10))
    var timer = null;

    const decreaseWeight = () => {

        setWeight(decimal ? weight - 0.1 : weight - 1)
    }

    function increaseWeight(){
        setWeight(decimal ? weight + 0.1 : weight + 1)
    }

    async function updateWeight(){
        await post_weight.request(weight)
    }

    if(get_weight.loading)
        return <Loading></Loading>

    return (
        <GeneralContainer>
            <View style={{justifyContent: "center", marginTop: 70, alignItems: "center"}}>

                <Title1><Bold>¿Cuánto pesas hoy?</Bold></Title1>
                <View style={{width: "100%", alignItems:"center", flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom: 20}}>
                    <TouchableOpacity style = {style.iconButton} onPressIn={() => decreaseWeight()}>
                        <Feather name="minus-circle" size={25} color={PalleteColors.textSecondaryColor}></Feather>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDecimal(false)}>
                        <Text style={{fontSize: decimal ? 45 : 75, fontFamily: "poppins-regular", color: decimal ? PalleteColors.textSecondaryColor : PalleteColors.textPrimaryColor}}>{Math.floor(weight)}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDecimal(true)}>
                        <Text style={{fontSize: !decimal ? 45 : 75, fontFamily: "poppins-regular", color: !decimal ? PalleteColors.textSecondaryColor : PalleteColors.textPrimaryColor}}>.{ weightDecimals  }</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.iconButton} onPress={increaseWeight}>
                        <Feather name="plus-circle" size={25} color={PalleteColors.textSecondaryColor}></Feather>
                    </TouchableOpacity>
                </View>


            </View>
            <FormButton placeholder="Registrar" width="70%" onPress={updateWeight}></FormButton>
        </GeneralContainer>
);
}


const style = StyleSheet.create({
    iconButton : {

        margin: 20

    }
})
