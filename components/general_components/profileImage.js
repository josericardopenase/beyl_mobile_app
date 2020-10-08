import React from 'react'
import { View, Text, Image } from 'react-native'

export default function ProfileImage({size}) {
    return (
        <Image style={{width: size, height: size, borderRadius: 600}} source={{uri: 'https://scontent.flpa1-1.fna.fbcdn.net/v/t1.0-9/28378387_194319104495670_684902334457788365_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=54lYhEI9nSUAX_hXtrD&_nc_ht=scontent.flpa1-1.fna&oh=71bbe7e699efd603543c170ca2d000e4&oe=5F84A6EF'}}/>
    )
}
