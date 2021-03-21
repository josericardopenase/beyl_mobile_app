import React from 'react'
import { View, Text } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import useAuth from '../../../../auth/useAuth'
import GeneralContainer from '../../../general_components/generalContainer'
import Title from '../../../general_components/title'
import ProgressBox from '../progress/history/progressBox'
import ProgressDateBox from '../progress/history/progressDateBox'
import ProgressSnippet from '../progress/progressSnippet'
import Article from './Components/Article'
import ArticleList from './Components/ArticleList'

export default function Home() {


    return (
        <View style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 60}}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Title title={["Bienvenido, ", "de nuevo" + " 👋"]}></Title>
                <ProgressSnippet></ProgressSnippet>
                <ArticleList></ArticleList>
            </ScrollView>
        </View>
    )
}
