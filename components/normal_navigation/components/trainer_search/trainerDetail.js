import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { BlurView } from 'expo-blur';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ProfileFeedback from './trainer_detail/components/profileFeedback';
import ProfileCarousel from './trainer_detail/components/profileCarousel'
import ProfileInformation from './trainer_detail/components/profileInformation';
import GeneralContainer from '../../../general_components/generalContainer';
import TrainerPlans from './trainer_detail/components/TrainerPlans';
import TagList from './trainer_detail/components/tagList';
import PlansCard from './trainer_detail/components/plansCard';
import TrainerContact from './trainer_detail/components/trainerContact';
import Icon from 'react-native-vector-icons/FontAwesome';
import Comments from './trainer_detail/components/comments';


export default function TrainerDetail({navigation}) {

    const [like, setLike] = useState(false)

    return (

            <View style={{flex: 1, position: "relative"}}>
                    <Image style={styles.upImage} source={{uri: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118472059_269837497421879_5727021323843125690_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ThaRlrl6-RgAX-Ldxxd&oh=5641cb72a8b9a80f56de0fc1e591597d&oe=5F8836F7'}} blurRadius={4}/>
                    
                    <ScrollView style={{flex: 1}} scrollEventThrottle={1} showsVerticalScrollIndicator={false}  >

                        <View style={styles.container}>
                            <Image style={styles.profileImage} source={{uri: 'https://scontent.flpa1-1.fna.fbcdn.net/v/t1.0-9/28378387_194319104495670_684902334457788365_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=54lYhEI9nSUAX_hXtrD&_nc_ht=scontent.flpa1-1.fna&oh=71bbe7e699efd603543c170ca2d000e4&oe=5F84A6EF'}}/>

                            <View style={{alignItems: "center"}}>
                            
                                <Text style = {styles.name}>Jose Ricardo Peña</Text>
                                <TouchableOpacity onPress={() => setLike(!like)}><Icon name={like ? "heart" : "heart-o"} size={30} color="red" /></TouchableOpacity>
                                <Text style = {styles.description} >descripcion descripcion  descripcion descripcion descripcion</Text>

                                <View style={{flexDirection: "row",justifyContent: "space-between", width: "80%"}}>
                                    <ProfileFeedback number={199} name={"likes"} icon = {"ios-heart"} color={"red"}></ProfileFeedback>
                                    <ProfileFeedback number={4.5} name={"puntucion"} icon = {"ios-star"} color={"orange"} ></ProfileFeedback>
                                    <ProfileFeedback number={"45€"} name={"desde"} icon = {"ios-cart"} color={"#1687de"}></ProfileFeedback>

                                </View>
                            
                        
                            </View>

                            
                            <TagList></TagList>



                            <ProfileCarousel></ProfileCarousel>
                            
                            <GeneralContainer>
                                <ProfileInformation title="Formación 💪"></ProfileInformation>
                                <ProfileInformation title="Trabajos anteriores 👨‍🔧"></ProfileInformation>
                                <ProfileInformation title="Relevancia 😁"></ProfileInformation>

                            </GeneralContainer>

                            <TrainerContact></TrainerContact>

                            <Comments></Comments>

                        </View>



                </ScrollView>

                <TrainerPlans navigation = {navigation}></TrainerPlans>
            </View>

    )
}

const styles = StyleSheet.create({
    upImage : {
        width: "100%",
        height: 280,
        position: "absolute",
        top: 0
    },
    container:{
        flex : 1,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 230,

    },
    profileImage : {
        width: 120,
        height: 120,
        alignSelf: "center",
        borderRadius: 20,
        marginTop: -50
    },
    name : {
        fontSize: 21,
        fontFamily: "poppins-bold",
        marginTop: 15,
    },
    description: {
        fontSize: 12,
        fontFamily: 'poppins-regular',
        padding: 20,
        textAlign: "center",
        color: "grey"
    }
})