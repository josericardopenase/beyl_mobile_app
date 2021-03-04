import { Title } from '@material-ui/icons';
import { Formik, getIn } from 'formik';
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Form from '../../../../general_components/form';
import FormEmail from '../../../../general_components/forms/high_level_inputs/FormEmail';
import FormPassword from '../../../../general_components/forms/high_level_inputs/FormPassword';
import FormCompleteInput from '../../../../general_components/forms/input_types/formCompleteInput';
import GeneralContainer from '../../../../general_components/generalContainer';
import Bold from '../../../../general_components/titles/bold';
import Title1 from '../../../../general_components/titles/title1';
import Title3 from '../../../../general_components/titles/title3';
import * as Yup from 'yup'
import FormPicker from '../../../../general_components/forms/FormPicker';
import TitleError from '../../../../general_components/titles/titleError';
import useApiCallback from '../../../../../customHooks/useApiCallback';
import apiProfile from '../../../../../api/apiProfile';
import FormButton from '../../../../general_components/forms/FormButton';
import useApi from '../../../../../customHooks/useApi';
import Loading from '../../../../general_components/loading';
import { useNavigation } from '@react-navigation/native';
import EventBus from 'eventing-bus'
import { MODIFIED_PROFILE } from '../../../../../events/events';

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
    sex: Yup.string().required().oneOf(["hombre", "mujer"]).label("Sexo"),
    key: Yup.string().required().label("Clave de entrenador"),
    alergias: Yup.string().optional().label("Alergias"),
    born_date: Yup.string().required().label("Fecha de nacimiento"),
    amount_excersise: Yup.string().required().label("Actividad física") 

})

export default function SettingsProfile() {

    const navigation = useNavigation();
    const getInformation = useApi(apiProfile.getProfileAthlete)
    const [loading, setLoading] = useState(false);



    const modifyProfile = useApiCallback(apiProfile.modifyProfileAthlete, (data) => {

        EventBus.publish(MODIFIED_PROFILE)
        navigation.navigate("Settings")
    })


    const handleSubmit = (values) => {
            setLoading(true);
            modifyProfile.request(values)
    }


    useEffect(() => {
        getInformation.request()
    }, [])

    if(getInformation.loading)
        return <Loading></Loading>

    const opcionesEjercicio = [{label: "Poco o ningún ejercicio", value: "ne"}, {label: "Ejercicio ligero (1-3 días a la semana)", value: "el"}, {label: "Ejercicio moderado (3-5 días a la semana)", value: "em"},{label: "Ejercicio fuerte (6-7 días a la semana)", value: "ef"}, {label: "Ejercicio muy fuerte (dos veces al día)", value:  "emf"}] 


    return (
        <GeneralContainer>
            <ScrollView showsVerticalScrollIndicator = {false}>

            <View style={{marginTop: 20}}>
                    <Formik 
                    initialValues={{ height: getInformation.data.height, sexo: getInformation.data.sexo, alergias: getInformation.data.alergias, born_date: getInformation.data.born_date, amount_excersise: getInformation.data.amount_excersise.toLowerCase()}}
                    onSubmit={values => handleSubmit(values)}
                    >

                    {
                        ({handleSubmit, errors}) => (
                        <Form>
                            <FormCompleteInput defaultValue={getInformation.data.height.toString()} name="height" placeholder="Altura en cm" icon="altimeter"></FormCompleteInput>
                            <FormPicker defaultValue={opcionesEjercicio.find(x => x.value === getInformation.data.amount_excersise.toLowerCase()).label} name="amount_excersise" placeholder={"Actividad física"} icon="gender-male-female" options={opcionesEjercicio}></FormPicker>
                            <FormPicker defaultValue={getInformation.data.sexo} name="sex" placeholder={"sexo"} icon="gender-male-female" options={[{label: "Hombre", value: "hombre"}, {label: "Mujer", value: "mujer"}]}></FormPicker>
                            <FormCompleteInput defaultValue={getInformation.data.alergias} name="alergias" placeholder="Alergias" icon="food"></FormCompleteInput>
                            <TitleError error={modifyProfile.error.toString()} visible={modifyProfile.error ? true : false} />
                            
                            <FormButton placeholder="Guardar" loading={loading} onPress={() => {if(!loading) handleSubmit();}}></FormButton>
                        </Form>
                        )
                    }
                    </Formik>
            </View>
        </ScrollView>
        </GeneralContainer>
    )
}
