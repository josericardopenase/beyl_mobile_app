import React from 'react'
import { View, Text } from 'react-native'
import Title3 from '../../../../general_components/titles/title3'
import Excersise from './excersise'
import ExcersiseMultiple from './excersiseMultiple'

export default function ExcersiseGroup({obj}) {
    return (
        <View style={{marginTop: 20}}>
            <Title3 primary={true} marginBottom={-10}>{obj.name}</Title3>
            {
                obj.rutine_excersises.map((obj) => (obj.excersise.length > 1 ? <ExcersiseMultiple obj={obj} key={obj.id}/> :  <Excersise obj={obj} key={obj.id}></Excersise>))
            }
        </View>
    )
}
