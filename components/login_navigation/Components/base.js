import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from '../../general_components/form'
import FormButton from '../../general_components/forms/FormButton'
import PalleteColors from '../../general_components/palleteColors'
import { useNavigation } from '@react-navigation/native';
import FormGoogle from '../../general_components/forms/social_media/FormGoogle';
import FormFacebook from '../../general_components/forms/social_media/FormFacebook';
import Title from '../../general_components/title';
import Title5 from '../../general_components/titles/title5';

export default function Base() {

    const navigation = useNavigation()

    return (

        <SafeAreaView style={{position: "relative", flex: 1}}>

            <View style={styles.containerLogo}>
                <Image source={require('../../../assets/logo.png')} style={{height: 133.3333, width:  259.33, marginBottom: 30}}></Image>
            </View>

            <View style={styles.containerLogin}>
                <View style={styles.containerFields}>


                    <Form style={{width: "100%", paddingLeft : 30, paddingRight : 30, paddingTop: 0}}>


                        <FormFacebook />
                        <FormGoogle />

                        <FormButton placeholder="Accede con tu email" icon={
                            <MaterialIcon name="email" color="white" size={25}></MaterialIcon>
                        } />
                        <Title5  style={{alignSelf: "center", marginTop: 20}}> ¿Ya tienes cuenta?</Title5>
                        <FormButton placeholder="INICIAR SESIÓN" background={PalleteColors.background} color={PalleteColors.mainColor}
                        onPress={() => navigation.navigate('Login')} 
                        />

                    </Form>


                </View>
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    containerLogo : {
        height: 320,
        backgroundColor: "#ffc600",
        justifyContent: "center",
        alignItems: "center"
    },
    containerLogin: {
        borderTopStartRadius: 50,
        borderTopEndRadius:50,
        marginTop: -60,
        width: "100%",
        flex : 1,
        backgroundColor: "white",
        justifyContent: "center"
    },
    containerFields : {
        alignItems: "center"
    }

})