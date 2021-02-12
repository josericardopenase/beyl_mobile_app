import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Title1 from '../../../../general_components/titles/title2'
import Title5 from '../../../../general_components/titles/title5'
import Bold from '../../../../general_components/titles/bold'
import PalleteColors from '../../../../general_components/palleteColors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function Article({obj}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Article', {obj: obj})}>

            <Image 
            style={styles.image}
            source={{uri: obj.image}}>
            </Image>
            <Title1><Bold>{obj.title}</Bold></Title1>

            <View style={{flexDirection: "row", marginTop: 10, alignItems: "center"}}>
                <MaterialIcon name="calendar" style={{color: PalleteColors.mainColor, marginRight: 10}} size={25}></MaterialIcon>
                <Title5>{obj.created.slice(0,10)}</Title5>
            </View>



        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 15,
        backgroundColor: PalleteColors.background,
        borderRadius: 10,
        marginTop: 20

    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 10
    }

})