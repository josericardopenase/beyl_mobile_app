import { Title } from '@material-ui/icons';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { View, Text, ImagePickerIOS } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Form from '../../../../general_components/form';
import FormButton from '../../../../general_components/forms/FormButton';
import FormEmail from '../../../../general_components/forms/high_level_inputs/FormEmail';
import FormPassword from '../../../../general_components/forms/high_level_inputs/FormPassword';
import FormCompleteInput from '../../../../general_components/forms/input_types/formCompleteInput';
import GeneralContainer from '../../../../general_components/generalContainer';
import Bold from '../../../../general_components/titles/bold';
import Title1 from '../../../../general_components/titles/title1';
import Title3 from '../../../../general_components/titles/title3';
import TitleError from '../../../../general_components/titles/titleError';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import useApiCallback from '../../../../../customHooks/useApiCallback';
import Loading from '../../../../general_components/loading';
import apiProfile from '../../../../../api/apiProfile';
import ProfileImage from '../../../../general_components/profileImage';
import Title5 from '../../../../general_components/titles/title5';
import PalleteColors from '../../../../general_components/palleteColors';
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import EventBus from 'eventing-bus'
import { MODIFIED_PROFILE } from '../../../../../events/events';

const validationSchema = Yup.object().shape({

    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().label("Nombre"),
    surname: Yup.string().required().label("Apellidos"),

})

export default function SettingsAccount() {

    const [profile, setProfile] = useState();
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const getProfile = useApiCallback(apiProfile.getProfile, (data) => setProfile(data))
    const modifyProfile = useApiCallback(apiProfile.modifyProfile, (data) => {
        setLoading(false)
        EventBus.publish(MODIFIED_PROFILE)
        navigation.navigate("Settings")
    })

    const [loading, setLoading] = useState(false);

    const requestPermission = async () => {


        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)

        if(!granted)
            alert('Necesitas activar la camara para cambiar la imagen de perfil.')

    }

    const selectImage = async (setFieldValue) => {
        try{

            const result = await ImagePicker.launchImageLibraryAsync({base64: true, quality: 0.8, aspect: [1,1], allowsEditing: true});

            if(!result.cancelled){

                setImage(result.uri)
                setFieldValue("profile_pic", result.base64)
            }


        }catch(error){
            alert(error)
        }

    }

    const handleSubmit = (values) => {
        setLoading(true);
        modifyProfile.request(values)

    }

    useEffect(() => {
        getProfile.request()
        requestPermission();
    }, [])

     if(getProfile.loading ) {
        return <Loading></Loading>
    }

    return (
        <GeneralContainer>
            <ScrollView showsVerticalScrollIndicator = {false}>

            <View style={{marginTop: 20}}>
                    <Formik 
                    initialValues={{email: profile.email, first_name : profile.first_name, last_name: profile.last_name}}
                    onSubmit={values => handleSubmit(values)}
                    >
                    {
                        ({handleSubmit, errors, setFieldValue}) => (
                        <Form>

                            <TouchableOpacity style={{alignItems: "center"}} onPress={() => selectImage(setFieldValue)}>
                                <ProfileImage size={100} url={image ? image : profile.profile_pic}></ProfileImage>
                                <Title5 style={{marginTop: 20, marginBottom : 20}} color={PalleteColors.mainColor}>Cambiar foto de perfil</Title5>
                            </TouchableOpacity>

                            <FormEmail defaultValue={profile.email}></FormEmail>
                            <FormCompleteInput  defaultValue={profile.first_name} name="first_name" initialValue={getProfile.data.email} placeholder="Nombre" icon="account"></FormCompleteInput>
                            <FormCompleteInput defaultValue={profile.last_name} name="last_name" placeholder="Apellidos" icon="account"></FormCompleteInput>
                            
                            <FormButton placeholder="Guardar"  loading={loading} onPress={() => {handleSubmit();}}></FormButton>
                        </Form>
                        )
                    }
                    </Formik>
            </View>
        </ScrollView>
        </GeneralContainer>
    )
}
