import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/FontAwesome5';
import Subtitle from '../../../../general_components/subtitle';

export default function ProfileImageInfo({image, title, description, color}) {
    return (
        <ImageBackground style={{marginTop: 20, padding: 15}} imageStyle = {{borderRadius: 20}} source={{uri:image}}>
        
            <Text style={{fontFamily: "poppins-bold", fontSize: 18, color: color, backgroundColor: "white", alignSelf: "flex-start", paddingRight: 5, paddingLeft: 5, borderRadius: 5}}>{title}</Text>


            <View style={{flexDirection: "row", alignItems: "center", marginTop: 10, backgroundColor: color, alignSelf: "flex-start", paddingRight: 10, paddingLeft: 10, borderRadius: 5}}>

                <MaterialIcon name="heartbeat" size={25} color={"white"}></MaterialIcon>
                <Text style={{fontFamily: "poppins-bold", fontSize: 18, color: "white", marginLeft: 15}}>{description}</Text>
            
            </View>

        </ImageBackground>
    )
}
