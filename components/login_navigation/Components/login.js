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

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(7).label("Password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Insecure password"
    )

})

export default function Login() {
    const authContext = useContext(AuthContext);

    const [loginFailed, setLoginFailed ] = useState(false);
    const [error, setError ] = useState("");

    const handleSubmit = async ({email, password}) => {
        const result = await apiAuth.login(email, password);
        if(!result.ok) {
            setError(result.data.non_field_errors[0]);
            return setLoginFailed(true);
        } 
        setLoginFailed(false);
        authContext.setUser(result.data);
        storage.setUser(result.data);
    }

    return (
        <GeneralContainer>
            <View style={{
                justifyContent: "center"
            }}>
                <Title1 style={{marginTop: 20, alignSelf: "center"}}><Bold>Inicia sesión en Beyl</Bold></Title1>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={values => handleSubmit(values)}
                    validationSchema={validationSchema}>
                        {
                            ({handleSubmit}) => (

                            <Form style={{marginTop: 40}}>
                                <FormEmail/>
                                <FormPassword/>
                                <FormButton placeholder="¿Olvidaste tu contraseña?" background={PalleteColors.background} color={PalleteColors.textSecondaryColor}></FormButton>
                                <FormButton placeholder="Acceder" onPress={handleSubmit}></FormButton>
                                <TitleError error={error} visible={loginFailed} />
                                <Title5 style={{alignSelf: "center", marginTop: 20}}>o</Title5>
                                <FormFacebook></FormFacebook>
                                <FormGoogle></FormGoogle>
                            </Form>

                            )

                        }
                </Formik>

            </View>
        </GeneralContainer>
    )
}
