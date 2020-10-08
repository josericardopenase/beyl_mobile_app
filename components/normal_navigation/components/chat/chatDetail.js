import React from 'react'
import { View, Text , FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Message from './chat_detail_components/message'
import SendMessage from './chat_detail_components/sendMessage'

export default function ChatDetail() {

    const DATA = [
        {
          id: '1',
          content : "que tal estas?",
          main : false
        },
        {
          id: '2',
          content : "fatal",
          main : true
        },
        {
          id: '3',
          content : "pues chupame los cojones",
          main : false
        },
        {
          id: '4',
          content : "vete a la mierda entonces",
          main : true
        },
        
      ];

    return (
        <View style={{flex: 1}}>
            <FlatList style={{marginBottom: 65}}
             data = {DATA}
             renderItem={ ({item}) => <Message message={item}/>}
             keyExtractor ={item => item.id}
             refreshing={false}
             
             onRefresh={()=>console.log("refresh")}/>
            <SendMessage></SendMessage>
        </View>
    )
}
