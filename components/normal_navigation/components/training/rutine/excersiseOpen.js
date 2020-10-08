import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GeneralContainer from '../../../../general_components/generalContainer'
import PalleteColors from '../../../../general_components/palleteColors'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ExcersiseOpen() {

    const navigation = useNavigation()

    return (
        <View style={{marginTop: 10, backgroundColor: "white", borderRadius: 20, padding: 12}} >

            <GeneralContainer>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                     <MaterialIcon name="note" size={18} color={PalleteColors.secondColor} style={{marginBottom: 5}}></MaterialIcon>
                     <Text style={styles.titulo}>Anotaciones:</Text>
                </View>   
                <Text style={{fontFamily: "poppins-regular", color: "grey"}}>Me gustaría que lo hicieras pesado para trbajar la tensión mecánica</Text>
                <TouchableOpacity  onPress = {()=> navigation.navigate('RutineDetail')} style={{backgroundColor: PalleteColors.secondColor, padding:15, borderRadius: 10, marginTop: 20, alignItems: "center", flexDirection: "row", justifyContent: "center"}}><MaterialIcon name="dumbbell" color="white" size={20} style={{marginRight: 10}}></MaterialIcon><Text style={{color: "white", fontFamily: "poppins-regular"}}>Explicación ejercicio</Text></TouchableOpacity>
            </GeneralContainer>

        </View>
    )
}

const styles = StyleSheet.create({
    titulo : {
        fontSize: 16,
        fontFamily: "poppins-bold",
        color: PalleteColors.secondColor,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 7
    }
})
