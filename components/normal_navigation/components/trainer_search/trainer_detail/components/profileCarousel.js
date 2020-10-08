import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../../../general_components/generalContainer'
import TouchableImage from '../../../../../general_components/touchableImage'

export default function ProfileCarousel() {
    return (
        <View style={{marginTop: 10, marginBottom: 30}}>
            <GeneralContainer>
                <Text style={{fontSize: 17, fontFamily: "poppins-bold"}}>Imagenes</Text>
            </GeneralContainer>

            <ScrollView snapToInterval={200} decelerationRate="fast" horizontal={true} showsHorizontalScrollIndicator={false} minimumZoomScale={1} maximumZoomScale={5} bouncesZoom={true} >
                <TouchableImage style={{width: 200, height: 300, borderRadius: 20, marginLeft: 10}}  src={'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118472059_269837497421879_5727021323843125690_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ThaRlrl6-RgAX-Ldxxd&oh=5641cb72a8b9a80f56de0fc1e591597d&oe=5F8836F7'}></TouchableImage>
                <Image style={{width: 200, height: 300, borderRadius: 20, marginLeft: 10}} source={{uri: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118472059_269837497421879_5727021323843125690_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ThaRlrl6-RgAX-Ldxxd&oh=5641cb72a8b9a80f56de0fc1e591597d&oe=5F8836F7'}}/>
                <Image style={{width: 200, height: 300, borderRadius: 20, marginLeft: 10, marginRight: 10}} source={{uri: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118472059_269837497421879_5727021323843125690_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ThaRlrl6-RgAX-Ldxxd&oh=5641cb72a8b9a80f56de0fc1e591597d&oe=5F8836F7'}}/>

            </ScrollView>
        </View>
    )
}
