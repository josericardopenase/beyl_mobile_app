import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import apiArticles from '../../../../../api/apiArticles'
import useApiCallback from '../../../../../customHooks/useApiCallback'
import Loading from '../../../../general_components/loading'
import MessageBox from '../../../../general_components/messageBox'
import Title3 from '../../../../general_components/titles/title3'
import Article from './Article'

export default function ArticleList() {

    const getArticles= useApiCallback(apiArticles.getArticles, data => setArticles([...articles, ...data.results]))
    const [articles, setArticles] = useState ([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getArticles.request(page, 10)

    }, [page])


    if(getArticles.loading)
        return <Loading></Loading>


    return (
        <>
            <Title3 primary={true}>Articulos</Title3>

            {
                articles != []  ? 
                <FlatList
                    data={articles}
                    renderItem={({item}) => <Article obj={item}></Article>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    style={{paddingBottom: 30}}
                    onEndReached={() => {
                        if(getArticles.next != null)
                            setPage(page + 1)
                    }}
                /> : 
            <MessageBox message={"No hay artículos disponibles"}></MessageBox>
            }
        </>
    )
}
