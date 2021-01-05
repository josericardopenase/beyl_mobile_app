import React, {useState, useEffect} from 'react';
import {View, Button, Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Title5 from '../../titles/title5';
import PalleteColors from '../../palleteColors';
import { useFormikContext } from 'formik';
import TitleError from '../../titles/titleError';

export default function FormDateTimePicker({name, placeholder, mode, first}) {

    const [date, setDate] = useState(new Date(Date.now()));
    const [show, setShow] = useState(false);

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const {setFieldTouched, handleChange, errors, touched, setFieldValue} = useFormikContext();


    function formatDate(d){
      return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);

    }

    function formatTime(d){
        return d.toLocaleTimeString('es-ES', 'DD/MM/YYYY').substr(0, 5);
    }


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        
        if(mode === "date")
          setFieldValue(name, formatDate(currentDate))
        else
          setFieldValue(name, formatTime(currentDate))
      };
    
      useEffect(() => {
        onChange()

        if(mode === "time"){
          setDate(new Date(0, 0, 0,0,1,0))
        }
      }, [])

      const showIt = () => {
        setShow(true);
      };
    
  return (
<View>
      <View>
      </View>
      <View>
        <TouchableOpacity onPress={showIt} style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 15,
            paddingBottom: 15,
            borderBottomColor: "#e1e1e1",
            borderBottomWidth: 1,
            borderTopColor: "#e5e5e5",
            borderTopWidth: first ? 1 : 0

            }}>
            <Title5>{placeholder}</Title5>
            <Title5 primary={true}>{mode === "date" ? date.toLocaleDateString("es-ES", options) : (date.getHours() != 0 ? date.getHours()  > 1? date.getHours()  + " horas " : date.getHours() + " hora ": "") + (date.getMinutes() != 0 ?  date.getMinutes() < 2 ? date.getMinutes()  + " minuto " : date.getMinutes()  + " minutos " : "0 minutos")}</Title5>
        </TouchableOpacity>
        <TitleError error={ errors[name] } visible={touched[name]}/>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          color
        />
      )}
    </View>
  );
}
