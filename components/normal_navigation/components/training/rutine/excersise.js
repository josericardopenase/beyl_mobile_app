import React, { useState } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GeneralContainer from '../../../../general_components/generalContainer'
import PalleteColors from '../../../../general_components/palleteColors'
import ExcersiseOpen from './excersiseOpen'

export default function Excersise() {

    const [active, setActive] = useState(false)

    return (
        <ImageBackground style={{marginTop: 20}} imageStyle = {{borderRadius: 20}} source={{uri: 'https://i.blogs.es/b86c79/1366_2000-1-/1366_2000.jpeg'}} >

            <View style={{  backgroundColor: "rgba(0, 0, 0, 0.50)", borderRadius: 20,  padding: 15, flexDirection: "column"}}>
                <TouchableOpacity  onPress={() => setActive(!active)}>
                    
                    <View style={{ margin: 10, flex: 1}}>
                        <Text style={{fontSize: 18, fontFamily: "poppins-bold", color: 'white'}}>Press de banca</Text>
                        <Text style={{fontFamily: "poppins-bold", color: PalleteColors.mainColor}}>12 reps - 10 reps - 8 reps - 5reps</Text>
                    </View>


                </TouchableOpacity>

                {active ? <ExcersiseOpen></ExcersiseOpen> : null}

            </View>

        </ImageBackground>

    )
}
