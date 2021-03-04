import { ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import apiGeneralHistory from '../../../../api/apiGeneralHistory'
import useApiCallback from '../../../../customHooks/useApiCallback'
import ErrorApi from '../../../general_components/error_handling/errorApi'
import ErrorNothing from '../../../general_components/error_handling/errorNothing'
import GeneralContainer from '../../../general_components/generalContainer'
import Loading from '../../../general_components/loading'
import Title3 from '../../../general_components/titles/title3'
import ProgressDateBox from './history/progressDateBox'

export default function ProgressHistory() {

    const [results, setResults] = useState([])
    const getProgress = useApiCallback(apiGeneralHistory.getHistoryPaged, (data) => {console.log(data); setResults([...results, ...data.results])})
    const [page, setPage] = useState(1);

    useEffect(() =>{
        getProgress.request(page, 20)
    }, [page])

    return (
        <GeneralContainer>


            {
            results.length > 1 ?
            <>
                <FlatList
                    data={results} 
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <ProgressDateBox obj = {item} active={index > 0 ? results[index - 1].date != item.date :  true} first={index == 0}></ProgressDateBox>}
                    showsVerticalScrollIndicator={false}
                    onEndReached={() => setPage(page + 1)}

                />
                {getProgress.loading ? <Loading></Loading> : null}
            </>
            :
            <View style={{height: "100%"}}>

                <ErrorNothing error={"Parece que aun no has registrado ninguna actividad"}></ErrorNothing>

            </View>

            }

        </GeneralContainer>
    )
}
