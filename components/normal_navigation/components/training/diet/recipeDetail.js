import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import apiClientDiet from '../../../../../api/apiClientDiet'
import apiRecipes from '../../../../../api/apiRecipes'
import apiSettings from '../../../../../api/apiSettings'
import useApi from '../../../../../customHooks/useApi'
import GeneralContainer from '../../../../general_components/generalContainer'
import Loading from '../../../../general_components/loading'
import PalleteColors from '../../../../general_components/palleteColors'
import Subtitle from '../../../../general_components/subtitle'
import Title from '../../../../general_components/title'
import Food from './food'

export default function recipeDetail(props) {

    const recipe = useApi(apiRecipes.getRecipe);

    useEffect(() => {
        recipe.request(props.route.params.recipe);
    }, [])

    if(recipe.loading){
        return <Loading></Loading>
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={{width: "100%", height: 360}} source={{uri: apiSettings.url + recipe.data.image}}></Image>

            <View style={Styles.container}>

                <GeneralContainer>

                    {/* Titulo */}
                    <Text style={{alignSelf: "center", fontSize: 21, fontFamily: "poppins-bold", marginTop: 20, marginBottom: 20, color: PalleteColors.textPrimaryColor}}>{recipe.data.name}</Text>
                    
                    {/* INGREDIENTES */}
                    <Subtitle>Ingredientes</Subtitle>
                    <View style={{marginBottom: 20}}>
                         {
                            recipe.data.diet_recipe_food.map((obj) => <Food backgroundColor={'#f5f5f5'} obj={obj} key={obj.id}></Food>)
                         }
                    </View>

                    {/* PREPARACIÓN */}
                    <Subtitle>Preparación</Subtitle>
                    <Text style={{textAlign: "justify", color: "grey"}}>
                            {
                                recipe.data.preparation
                            }

                    </Text>

                </GeneralContainer>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container : {
        borderRadius: 40, 
        backgroundColor: PalleteColors.background,
        marginTop: -40,
    }
})