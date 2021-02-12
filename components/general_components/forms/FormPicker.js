import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Button, Picker, TouchableOpacity} from 'react-native'
import { FlatList, TextInput, TouchableHighlight,  } from 'react-native-gesture-handler'
import PalleteColors from '../palleteColors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Title3 from '../titles/title3'
import Title5 from '../titles/title5'
import { useFormikContext } from 'formik'
import TitleError from '../titles/titleError'

export default function FormPicker({placeholder, icon, secureTextEntry, options, name, ...otherProps}) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();

    const {setFieldTouched, handleChange, errors, touched, setFieldValue} = useFormikContext();

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View style={styles.container}>
                    <View style={{flexDirection: "row"}}>
                        { icon &&  <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={PalleteColors.textSecondaryColor} ></MaterialCommunityIcons>}
                        <Text style={styles.textInput}>{ value ? value.label : placeholder}</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={PalleteColors.textSecondaryColor}></MaterialCommunityIcons>
                </View>
            </TouchableWithoutFeedback>
            <TitleError error={errors[name]} visible={touched[name]}></TitleError>
{/*             FIXME SALIR CUANDO PULSES FUERA */}
            <Modal visible={open} animationType="fade" transparent={true}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                            <FlatList
                            data={options} 
                            keyExtractor={item => item.value.toString()}
                            renderItem={({item}) => <PickerItem item={item} onPress={() => {setOpen(false); setValue(item); setFieldValue(name, item.value); setFieldTouched(name)}}></PickerItem>}
                            />
                    </View>
                </View>
            </Modal>
        </>
   )
}


function PickerItem({item, onPress}){



    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize: 16, color: PalleteColors.textPrimaryColor, padding: 5}}>{item.label}</Text>
        </TouchableOpacity>
    )
} 


const styles = StyleSheet.create({
    container : {
        width: "100%",
        backgroundColor: PalleteColors.backgroundSecondary,
        padding: 12,
        borderRadius: 10,
        fontFamily: "poppins-regular",
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:  "center",
    },
    icon: {
        marginRight: 8
    },
    textInput: {
        fontSize: 14,
        fontFamily: "poppins-regular",
        color: PalleteColors.textPrimaryColor
        
    },

    centeredView: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "rgba(0,0,0,0.7)",
      zIndex: 0
      
    },
    modalView: {
      margin: 20,
      backgroundColor: PalleteColors.backgroundSecondary,
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
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