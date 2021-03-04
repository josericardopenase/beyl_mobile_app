import React, { useState } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import apiSettings from '../../../../../api/apiSettings'
import GeneralContainer from '../../../../general_components/generalContainer'
import PalleteColors from '../../../../general_components/palleteColors'
import ExcersiseOpen from './excersiseOpen'

export default function Excersise({obj}) {

    const [active, setActive] = useState(false)


    return (
        <ImageBackground style={{marginTop: 20}} imageStyle = {{borderRadius: 20}} source={{uri: obj.excersise[0].image}} >

            <View style={{  backgroundColor: "rgba(0, 0, 0, 0.50)", borderRadius: 20,  padding: 15, flexDirection: "column"}}>
                <TouchableOpacity  onPress={() => setActive(!active)}>
                    
                    <View style={{ margin: 10, flex: 1}}>
                        <Text style={{fontSize: 18, fontFamily: "poppins-bold", color: 'white'}}>{obj.excersise[0].name}</Text>
                        <Text style={{fontFamily: "poppins-bold", color: PalleteColors.mainColor}}>{obj.series}</Text>
                    </View>


                </TouchableOpacity>

                {active ? <ExcersiseOpen description={obj.anotation} id={obj.excersise[0].id}></ExcersiseOpen> : null}

            </View>

        </ImageBackground>

    )
}
