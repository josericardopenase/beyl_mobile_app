import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileInformation(props) {

    const [open, setOpen] = useState(false)

    return (
        <View style={{marginTop: 10, marginBottom: 10}}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => setOpen(!open)}>

            <View style={{flexDirection: "row",  alignItems: "center", width: "100%", justifyContent: "space-between"}}>
                <Text style={styles.title}>{props.title}</Text>
                <Ionicons name={!open ? "ios-arrow-forward" : "ios-arrow-down"} size={25} color={"black"} style={styles.iconStyle}></Ionicons>
            </View>
            
        </TouchableOpacity>

            { open ? <Text style={{marginTop: 10, marginLeft: 10, marginRight: 10, color: "grey"}}>- Noseque nosecuanto {"\n"}
                           - Noseque nosecuanto {"\n"}
                           - Noseque nosecuanto {"\n"}
                    </Text> : null }

        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize: 19,
        fontFamily: 'poppins-bold'
    },
    iconStyle :{
        marginRight: 10
    }
    
})