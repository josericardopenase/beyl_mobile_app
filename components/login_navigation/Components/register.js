import { Formik } from 'formik'
import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Form from '../../general_components/form'
import FormButton from '../../general_components/forms/FormButton'
import FormEmail from '../../general_components/forms/high_level_inputs/FormEmail'
import FormPassword from '../../general_components/forms/high_level_inputs/FormPassword'
import FormCompleteInput from '../../general_components/forms/input_types/formCompleteInput'
import GeneralContainer from '../../general_components/generalContainer'
import Bold from '../../general_components/titles/bold'
import Title1 from '../../general_components/titles/title1'
import Title3 from '../../general_components/titles/title3'
import FormDateTimePicker2 from '../../general_components/forms/input_types/formDateTimePicker2'
import * as Yup from 'yup';
import apiAuth from '../../../api/apiAuth'
import TitleError from '../../general_components/titles/titleError'
import AuthContext from '../../../auth/context'
import storage from '../../../auth/storage'
import FormPicker from '../../general_components/forms/FormPicker'
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Tiene que tener una mayúscula, al menos un  \n número y mínimo 8 carácteres"
    ),
    name: Yup.string().required().label("Nombre"),
    surname: Yup.string().required().label("Apellidos"),
    height: Yup.number("Tiene que ser un número").required().min(100).max(300).label("Altura"),
    weight: Yup.number("Tiene que ser un número").required().min(10).max(250).label("Peso"),
    sex: Yup.string().required().oneOf(['Hombre', 'Mujer', 'Otro']).label("Sexo"),
    key: Yup.string().required().label("Clave de entrenador"),
    alergias: Yup.string().optional().label("Alergias"),
    born_date: Yup.string().required().label("Fecha de nacimiento"),
    sport: Yup.string().required().label("Actividad física") 

})

export default function Register(props) {

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


    const handleSubmit = async (values) => {
        const result = await apiAuth.register(values);

        if(!result.ok) {
            if(result.data.non_field_errors != undefined)
                setError(result.data.non_field_errors[0]);
            else{
                setError("Este email ya esta en uso")
            }

            setLoginFailed(true);
            return;
        }else{ 

            setLoginFailed(false);

            authContext.setUser(result.data.token);
            storage.setUser(result.data.token);

            await registerForPushNotifications();
        }
    }


    return (
        <GeneralContainer>
            <ScrollView showsVerticalScrollIndicator = {false}>
            <Title1><Bold>Registrate</Bold> en beyl</Title1>
            <View style={{marginTop: 20}}>
                    <Formik 
                    initialValues={{email: '', password: '', name : '', surname: '', height: '', weight: '', sex: '', key: props.route.params.key, alergias: '', born_date: '', sport: ''}}
                    validationSchema={validationSchema}
                    onSubmit={values => handleSubmit(values)}
                    >
                    {
                        ({handleSubmit}) => (
                        <Form>
                            <Title3 style={{marginBottom: 20}}>Información básica</Title3>
                            <FormEmail></FormEmail>
                            <FormPassword></FormPassword>

                            <Title3 style={{marginTop: 30}}>Datos personales</Title3>
                            <FormCompleteInput name="name" placeholder="Nombre" icon="account"></FormCompleteInput>
                            <FormCompleteInput name="surname" placeholder="Apellidos" icon="account"></FormCompleteInput>
                            <FormDateTimePicker2 name = "born_date" placeholder="Fecha de nacimiento" mode="date" first={true}></FormDateTimePicker2>

                            <Title3 style={{marginTop: 30}}>Datos físicos</Title3>
                            <FormCompleteInput name="height" placeholder="Altura en cm" icon="altimeter"></FormCompleteInput>
                            <FormCompleteInput name="weight" placeholder="Peso en kg" icon="weight-gram"></FormCompleteInput>
                            <FormPicker name="sport" placeholder={"Actividad física"} icon="gender-male-female" options={[{label: "Poco o ningún ejercicio", value: 1.2}, {label: "Ejercicio ligero (1-3 días a la semana)", value: 1.375}, {label: "Ejercicio moderado (3-5 días a la semana)", value: "Otro"},{label: "Ejercicio fuerte (6-7 días a la semana)", value: 1.725}, {label: "Ejercicio muy fuerte (dos veces al día)", value:  1.9} ]}></FormPicker>
                            <FormPicker name="sex" placeholder={"sexo"} icon="gender-male-female" options={[{label: "Hombre", value: "Hombre"}, {label: "Mujer", value: "Mujer"}, {label: "Otro", value: "Otro"}]}></FormPicker>
                            <FormCompleteInput name="alergias" placeholder="Alergias" icon="food"></FormCompleteInput>
                            <TitleError error={error} visible={loginFailed} />
                            
                            <FormButton placeholder="Vamos alla!" onPress={handleSubmit}></FormButton>
                        </Form>
                        )
                    }
                    </Formik>
            </View>
        </ScrollView>
        </GeneralContainer>
    )
}
