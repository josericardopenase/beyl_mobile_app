import React, { useState } from 'react';
import { View, Text, DatePickerAndroid } from 'react-native';
import Title1 from '../../../../general_components/titles/title2';
import Bold from '../../../../general_components/titles/bold';
import GeneralContainer from '../../../../general_components/generalContainer';
import Title5 from '../../../../general_components/titles/title5';
import PalleteColors from '../../../../general_components/palleteColors';
import { Formik } from 'formik';
import FormButton from '../../../../general_components/forms/FormButton';
import Form from '../../../../general_components/form'
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormDateTimePicker from '../../../../general_components/forms/input_types/formDateTimePicker';
import useApiCallback from '../../../../../customHooks/useApiCallback';
import apiGeneralHistory from '../../../../../api/apiGeneralHistory';
import { useNavigation } from '@react-navigation/native';
import TitleError from '../../../../general_components/titles/titleError';

const validationSchema = Yup.object().shape({

    date: Yup.string().label("date").required(),
    time: Yup.string().label("time").required(),
    activitie: Yup.string(),
    has_distance: Yup.boolean(),
    distanance : Yup.number()

})

export default function ActivitieProgress(props) {


    const navigation = useNavigation()

    const data = props.route.params

    const post_general_history = useApiCallback(apiGeneralHistory.postHistory, (data) => {
            navigation.navigate("Home")
    })
    const [error, setError] = useState(false)

    const handleSubmit = ({values}) => console.log(values)

    const sendInformation = async ({date, time, name, has_distance,  distance}) => {
        await post_general_history.request(date, time, name, has_distance, distance)
    }


  return (
    <View>

        <View style={{alignItems: "center", width: "100%", backgroundColor: PalleteColors.backgroundSecondary, padding: 20}}>
            <Title1><Bold>{data.name}</Bold></Title1>
            <Text style={{fontSize: 70, marginTop: 10}}>{data.emoji}</Text>
        </View>

    <GeneralContainer>
        <Title5>¿Como te ha ido?</Title5>
        <Form>

                <Formik
                    initialValues={{date: '', time: '', name: data.name, has_distance: false, distance: 0}}
                    onSubmit={values => sendInformation(values)}
                    validationSchema={validationSchema}>
                        {
                            ({handleSubmit}) => (
                                <Form style={{marginTop: 20}}>

                                    <FormDateTimePicker name="date" placeholder = "Fecha" mode="date" first></FormDateTimePicker>
                                    <FormDateTimePicker name="time" placeholder ="Time" mode = "time"></FormDateTimePicker>
                                    <TitleError error={"Ha ocurrido un error"} visible={post_general_history.error}></TitleError>
                                    <FormButton placeholder="Registrar" onPress={handleSubmit}></FormButton>
                                </Form>

                            )

                        }
                </Formik>
        </Form>
     </GeneralContainer>
    </View>
  );
}
