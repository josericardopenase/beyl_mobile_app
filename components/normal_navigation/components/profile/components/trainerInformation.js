import { ButtonBase } from '@material-ui/core'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import apiSettings from '../../../../../api/apiSettings'
import FormButton from '../../../../general_components/forms/FormButton'
import PalleteColors from '../../../../general_components/palleteColors'
import ProfileImage from '../../../../general_components/profileImage'
import Bold from '../../../../general_components/titles/bold'
import Title3 from '../../../../general_components/titles/title3'

export default function TrainerInformation({trainer}) {

    const navigation = useNavigation()

    return (
        <View style={{backgroundColor : PalleteColors.background, padding: 10, borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            {
                trainer ?
                    <>
                        <ProfileImage url={trainer.profile_pic} size={60}></ProfileImage>
                        <Title3 style={{marginLeft: 20}} primary={true}><Bold>{trainer.first_name + " " + trainer.last_name}</Bold></Title3>
                    </>
                :
                    <View style={{alignItems: "center", width: "100%", padding: 10}}>
                        <View style={{flexDirection: "row"}}>
                            <Title3 style={{marginLeft: 0}} primary={true}><Bold>No tienes</Bold></Title3>
                            <Title3 style={{marginLeft: 5}} color={PalleteColors.mainColor}><Bold>entrenador</Bold></Title3>
                        </View>
                        <View>
                            <FormButton placeholder="Agrega un entrenador" onPress={() => navigation.navigate("JoinTrainer")}></FormButton>
                        </View>
                    </View>
            }
        </View>
    )
}
