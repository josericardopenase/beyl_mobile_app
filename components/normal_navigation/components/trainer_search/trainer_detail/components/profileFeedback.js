import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ProfileFeedback(props) {
    return (
        <View style={{alignItems: "center", marginLeft: props.margin}}>
            <Text style={styles.number}>{props.number}</Text>
            <View style={styles.name}>
                <Ionicons name={props.icon} size={18} color={props.color}></Ionicons>
                <Text style={{marginLeft: 7}}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = {
    number : {
        fontSize: 30,
        fontFamily :  "poppins-bold"
    },
    name :{
        flexDirection: "row",
        alignItems: "center"
    
    }

}
