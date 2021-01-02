import React from 'react'
import { View, Text, Image } from 'react-native'

export default function ProfileImage({size, url}) {
    return (
        <Image style={{width: size, height: size, borderRadius: 600}} source={{uri: url}}/>
    )
}
