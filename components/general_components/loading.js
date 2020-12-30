import React from 'react'
import LottieView from 'lottie-react-native'
import { View } from 'react-native'

export default function Loading({visible}) {
    return (
        <View style={{flex: 1, alignContent: "center", justifyContent:"center"}}>
            <LottieView autoPlay loop source={require('../../assets/animations/loading.json')} style={{height: 130, width: 130, alignSelf: "center"}}></LottieView>
        </View>
    )
}
