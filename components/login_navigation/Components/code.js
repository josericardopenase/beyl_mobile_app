import { Formik } from 'formik'
import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, TouchableHighlight, Image, TouchableOpacity } from 'react-native'
import Form from '../../general_components/form'
import FormButton from '../../general_components/forms/FormButton'
import FormCompleteInput from '../../general_components/forms/input_types/formCompleteInput'
import GeneralContainer from '../../general_components/generalContainer'
import Bold from '../../general_components/titles/bold'
import Title1 from '../../general_components/titles/title1'
import * as Yup from 'yup';
import apiInvitationKey from '../../../api/apiInvitationKey'
import TitleError from '../../general_components/titles/titleError'
import PalleteColors from '../../general_components/palleteColors'
import Title3 from '../../general_components/titles/title3'
import Title5 from '../../general_components/titles/title5'
import apiSettings from '../../../api/apiSettings'
import { useNavigation } from '@react-navigation/native'

const validationSchema = Yup.object().shape({
    key: Yup.string().required("El código es necesario").min(8, "El código debe ser de 8 caracteres" ).max(8, "El código debe ser de 8 caracteres"),

}) 
export default function Code() {

    const [error, setError] = useState("")
    const [failed, setFailed] = useState(false)
    const [modal, setModal] = useState(false)
    const [information, setInformation] = useState()
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();


    const handleSubmit = async({key}) => {

        setLoading(true);

        const result = await apiInvitationKey.validate(key)

        setLoading(false);

        if(!result.ok){
            setFailed(true)
            setError(result.data.detail)
            return
        }

        setInformation(result.data)
        setError(false)
        setModal(true)
    }
    return (
        <View style={{padding: 10, flex: 1}}>
                    <Title1><Bold>Introduce</Bold> tu código de entrenador</Title1>
                    <View style={{marginTop: 60 }}>
                    <Formik initialValues={{key: ''}}
                            onSubmit={values => handleSubmit(values)}
                            validationSchema={validationSchema}>
                        {
                            ({handleSubmit}) => (
                                <Form style={{marginTop: 0}}>
                                    <FormCompleteInput name="key" placeholder="Código de entrenador" icon="qrcode"></FormCompleteInput>
                                    <FormButton loading={loading} placeholder="Validar código" onPress={handleSubmit}></FormButton>
                                    <TitleError error={error} visible={failed}></TitleError>
                                
                                </Form>
                            )
                        }
                    </Formik>
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    }}>

                        <View style={styles.centeredView}>
                            {
                                information ?
                                <View style={styles.modalView}>
                                    <View style={{alignItems: "center"}}>
                                        <Title5>code : {information.key}</Title5>
                                        <Title1 primary={true}><Bold>{information.trainer.user.first_name + " "  + information.trainer.user.last_name}</Bold></Title1>
                                        <Image style={{width: 300, height: 200, borderRadius: 10, marginTop: 10, marginBottom: 10}} source={{uri: information.trainer.user.profile_pic}}></Image>

                                    </View>
                                    <TouchableOpacity onPress={() => {navigation.navigate("Register", information); setModal(false);}}>
                                        <FormButton placeholder="Es mi entrenador"></FormButton>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => setModal(false)}>
                                        <FormButton placeholder="Me he equivocado" background={PalleteColors.background}  color={PalleteColors.mainColor}></FormButton>
                                    </TouchableOpacity>
                                </View>
                                :
                                null
                            }

                        </View>

                    </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(0,0,0,0.7)",
      
    },
    modalView: {
      margin: 20,
      backgroundColor: PalleteColors.backgroundSecondary,
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width : "95%"
    },
    openButton: {
      backgroundColor: '#F194FF',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });