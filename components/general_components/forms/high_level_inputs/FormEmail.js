import React from 'react'
import { View, Text } from 'react-native'
import FormCompleteInput from '../input_types/formCompleteInput'

export default function FormEmail({name}) {
    return <FormCompleteInput name={name ? name : "email"} placeholder="Correo" autoCapitalize="none" textContentType="emailAddress" keyboardType="email-address" icon="email" />
}
