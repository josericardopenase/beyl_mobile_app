import React from 'react'
import {useFormikContext} from 'formik'
import TitleError from '../../titles/titleError';
import FormInputPassword from './formInputPassword';

export default function FormCompleteInputPassword({name, ...otherProps}) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <FormInputPassword 
            {
                ...otherProps
            }
            onBlur={()=>setFieldTouched(name)}
            onChangeText={handleChange(name)}/>
            <TitleError error={ errors[name] } visible={touched[name]}/>
        </>
    )
}
