import React from 'react'
import { View, Text } from 'react-native'
import FormCompleteInputPassword from '../input_types/formCompleteInputPassword'

export default function FormPassword({name}) {
    return <FormCompleteInputPassword name={name ? name : "password"} placeholder="Password"  textContentType="password"></FormCompleteInputPassword>
}
