import React from 'react'
import { View, Text, Image } from 'react-native'
import PalleteColors from '../../../../general_components/palleteColors'

export default function TrainerImage(props) {
    return (

            <View style={{flexDirection: "row", marginRight: 15}}>
                <Image style={{width: 70, height: 70, borderRadius: 50, borderWidth: props.active ? 4 : 0, borderColor: PalleteColors.mainColor}} source={{uri: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118472059_269837497421879_5727021323843125690_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ThaRlrl6-RgAX-Ldxxd&oh=5641cb72a8b9a80f56de0fc1e591597d&oe=5F8836F7'}}></Image>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontFamily: "poppins-bold", fontSize: 18, marginTop: 5}}>Jose Ricardo Peña</Text>
                    <Text style={{color: "grey"}}>@entrenador.com</Text>
                </View>
            </View>

    )
}
