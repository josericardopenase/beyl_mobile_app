import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import GeneralContainer from '../../../../../general_components/generalContainer'
import CommentsBox from './comments/commentsBox'
import Colors from '../../../../../general_components/palleteColors'
export default function Comments() {

    const box_width = 300

    return (
        <View style={{marginBottom: 60}}>
        <GeneralContainer>
            <Text style={{fontSize: 17, fontFamily: "poppins-bold"}}>Comments</Text>
        
            <TouchableOpacity><Text style={{fontFamily: "poppins-bold", marginBottom: 10, color: Colors.mainColor}}>Escribir una reseña</Text></TouchableOpacity>
        </GeneralContainer>   

            <ScrollView snapToInterval={box_width +20} decelerationRate={0} horizontal={true} showsHorizontalScrollIndicator={false}  >
                <CommentsBox width={box_width}></CommentsBox>
                <CommentsBox width={box_width}></CommentsBox>
                <CommentsBox width={box_width}></CommentsBox>
                <CommentsBox width={box_width}></CommentsBox>
                <CommentsBox width={box_width}></CommentsBox>
                <CommentsBox width={box_width}></CommentsBox>
                <CommentsBox width={box_width}></CommentsBox>
                <CommentsBox width={box_width}></CommentsBox>
                <CommentsBox width={box_width}></CommentsBox>

            </ScrollView>
        <GeneralContainer>  
            <TouchableOpacity style={{alignItems: "center", justifyContent: "center", borderRadius: 10, borderColor: "black", borderWidth: 1, padding: 10, marginTop: 10}}>
                <Text>Ver mas comentarios</Text>
            </TouchableOpacity>

        </GeneralContainer>
        </View>
    )
}
