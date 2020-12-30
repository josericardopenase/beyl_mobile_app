import React from 'react'
import FormInput from '../FormInput'
import {useFormikContext} from 'formik'
import TitleError from '../../titles/titleError';

export default function FormCompleteInput({name, ...otherProps}) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <FormInput 
            {
                ...otherProps
            }
            onBlur={()=>setFieldTouched(name)}
            onChangeText={handleChange(name)}
            />
            <TitleError error={ errors[name] } visible={touched[name]}/>
        </>
    )
}
