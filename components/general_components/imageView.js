import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function ImageView(props) {

    const [images, setImages] = useState(null)
    

    useEffect(()=>{
        getProps()
    }, [])

    const getProps = async () => {
        const getImg = await props.route.params

        setImages(getImg)
    }

    if(images === null)
        return null

    return (
        <ScrollView contentContainerStyle={{alignItems: "center", justifyContent: "center", flex: 1}}>

                   { images.map(obj => <Image style = {{width: '100%', height: 500, resizeMode: "cover"}} source={{uri: obj.image}}/>) }

        </ScrollView>
    )
}
