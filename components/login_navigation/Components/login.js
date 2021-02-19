import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import Form from '../../general_components/form'
import GeneralContainer from '../../general_components/generalContainer'
import Title1 from '../../general_components/titles/title1'
import Bold from '../../general_components/titles/bold'
import Title5 from '../../general_components/titles/title5'
import FormButton from '../../general_components/forms/FormButton'
import PalleteColors from '../../general_components/palleteColors'
import FormFacebook from '../../general_components/forms/social_media/FormFacebook'
import FormGoogle from '../../general_components/forms/social_media/FormGoogle'
import * as Yup from 'yup';
import {Formik} from 'formik';
import FormEmail from '../../general_components/forms/high_level_inputs/FormEmail'
import FormPassword from '../../general_components/forms/high_level_inputs/FormPassword'
import apiAuth from '../../../api/apiAuth'
import TitleError from '../../general_components/titles/titleError'
import AuthContext from '../../../auth/context'
import storage from '../../../auth/storage'
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password")
})

export default function Login() {

    const authContext = useContext(AuthContext);

    const [loginFailed, setLoginFailed ] = useState(false);
    const [error, setError ] = useState("");

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permission.granted) return;
            const token = await Notifications.getExpoPushTokenAsync();


            const result = await apiAuth.saveToken(token.data)

        } catch (error) {
            console.log('Error getting a token', error);

        }
    };


    const handleSubmit = async ({email, password}) => {
        const result = await apiAuth.login(email, password);

        if(!result.ok) {
            if(result.data.non_field_errors != undefined)
                setError(result.data.non_field_errors[0]);
            else{
                setError(result.data[0])
            }
            return setLoginFailed(true);
        } 

        setLoginFailed(false);

        await apiAuth.saveToken()


        authContext.setUser(result.data.token);
        storage.setUser(result.data.token);

        await registerForPushNotifications();
    }

    return (
        <GeneralContainer>
            <View style={{
                justifyContent: "center",
                alignContent: "center"
            }}>
                <Title1 style={{marginTop: 20, alignSelf: "center"}}><Bold>Inicia sesión en Beyl</Bold></Title1>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={values => handleSubmit(values)}
                    validationSchema={validationSchema}
                    >
                        {
                            ({handleSubmit}) => (

                            <Form style={{marginTop: 70}}>
                                <FormEmail/>
                                <FormPassword/>
                                <TitleError error={error} visible={loginFailed} />
                                <FormButton placeholder="¿Olvidaste tu contraseña?" background={PalleteColors.background} color={PalleteColors.textSecondaryColor}></FormButton>
                                <FormButton placeholder="Acceder" onPress={handleSubmit}></FormButton>
                            </Form>

                            )

                        }
                </Formik>

            </View>
        </GeneralContainer>
    )
}
