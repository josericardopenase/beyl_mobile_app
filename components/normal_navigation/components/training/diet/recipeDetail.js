import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import GeneralContainer from '../../../../general_components/generalContainer'
import Subtitle from '../../../../general_components/subtitle'
import Title from '../../../../general_components/title'
import Food from './food'

export default function recipeDetail() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={{width: "100%", height: 360}} source={{uri: 'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80'}}></Image>

            <View style={Styles.container}>

                <GeneralContainer>

                    {/* Titulo */}
                    <Text style={{alignSelf: "center", fontSize: 21, fontFamily: "poppins-bold", marginTop: 20, marginBottom: 20}}>Spaggeti</Text>
                    
                    {/* INGREDIENTES */}
                    <Subtitle>Ingredientes</Subtitle>
                    <View style={{marginBottom: 20}}>
                        <Food backgroundColor={'#f5f5f5'}></Food>
                        <Food backgroundColor={'#f5f5f5'}></Food>
                        <Food backgroundColor={'#f5f5f5'}></Food>
                        
                    </View>

                    {/* PREPARACIÓN */}
                    <Subtitle>Preparación</Subtitle>
                    <Text style={{textAlign: "justify", color: "grey"}}>

                    Prepara con nuestra receta unos deliciosos espaghetti a la boloñesa, sin duda una receta de pasta para triunfar y que suele gustar a todo el mundo. Es una auténtica maravilla la combinación de un sofrito de verduras, carne picada de buena calidad y la salsa de tomate, además de hierbas y especias que le dan el toque definitivo y lo mejor de todo, lo fácil que es de preparar.
                    Y es que no solo con spaghetti, la salsa boloñesa es de lo más versátil y por eso me encanta preparar una gran cantidad para congelarla en porciones y tenerla siempre disponible ya que se puede utilizar en multitud de recetas como por ejemplo para elaborar unos champiñones rellenos al horno, cocinar berenjenas rellenas de carne picada al microondas o lanzarte a la cocina internacional y preparar una sabrosa musaka o moussaka griega o una pizza calzone casera con salsa boloñesa y verduras.


                    </Text>

                </GeneralContainer>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container : {
        borderRadius: 40, 
        backgroundColor: "white",
        marginTop: -40,
    }
})