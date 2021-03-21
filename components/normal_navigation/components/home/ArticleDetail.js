import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../general_components/generalContainer'
import PalleteColors from '../../../general_components/palleteColors'
import Bold from '../../../general_components/titles/bold'
import Title1 from '../../../general_components/titles/title2'
import Title5 from '../../../general_components/titles/title5'
import HTMLView from 'react-native-htmlview';
import Title3 from '../../../general_components/titles/title3'

export default function ArticleDetail(props) {

    const obj = props.route.params.obj

    return (
        <GeneralContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title1><Bold>{obj.title}</Bold></Title1>
                <Image 
                style={styles.image}
                source={{uri: obj.image}}>
                </Image>
                <Title5 color="white">{obj.texto.replace(/<\/?[^>]+(>|$)/g, "")}</Title5>
                    
            </ScrollView>
        </GeneralContainer>
    )
}

const styles = StyleSheet.create({


    container: {
        padding: 15,
        backgroundColor: PalleteColors.background,
        borderRadius: 10,
        marginTop: 20

    },
    body : {
        color: "white",
    },
    image: {
        marginTop: 20,
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    }

})

const htmlStyles = StyleSheet.create({

    p : {
        color: PalleteColors.textSecondaryColor,
    },
    img : {
        width: "100%",
        height: 70
    }
})