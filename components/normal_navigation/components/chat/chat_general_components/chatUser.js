import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MessageNotification from './messageNotification'

export default function ChatUser() {

    const nav = useNavigation()

    return (
        <TouchableOpacity onPress={() => nav.navigate('ChatDetail')}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 5, alignItems: "center", backgroundColor: "white", padding: 10, borderRadius: 20}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image style={{width: 60, height: 60,borderRadius: 20}} source={{uri: 'https://scontent.flpa1-1.fna.fbcdn.net/v/t1.0-9/28378387_194319104495670_684902334457788365_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=54lYhEI9nSUAX_hXtrD&_nc_ht=scontent.flpa1-1.fna&oh=71bbe7e699efd603543c170ca2d000e4&oe=5F84A6EF'}}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontFamily: "poppins-bold", fontSize: 15}}>Jose Ricardo Peña</Text>
                        <Text style={{fontFamily: "poppins-regular", color: "grey", fontSize: 12}}>Que tal tu ultimo entrenamiento...</Text>
                    </View>
                </View>

                <View style={{marginRight: 10, alignItems: "center"}}>
                    <Text style={{marginBottom: 10, fontSize: 12, color: "grey"}}>16:00</Text>
                    <MessageNotification/>
                </View>
            </View>
        </TouchableOpacity>
    )
}
