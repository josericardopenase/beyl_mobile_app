import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './components/trainer_search/home';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Training from './components/training/Training';
import PalleteColors from '../general_components/palleteColors';
import Chat from './components/chat/chat';
import { Image, View } from 'react-native';
import Profile from './components/profile/profile';

const Tab = createBottomTabNavigator()

export default function NormalNavigation() {
    return (

        <Tab.Navigator
            
            tabBarOptions={{
                activeTintColor: '#FFC600',
                inactiveTintColor: '#d5d5d5',
                showLabel: false,


            style:{
                borderTopRightRadius: 30, 
                borderTopLeftRadius: 30, 
                position: "absolute",
                alignSelf: "center",
                height: 60,
                paddingTop: 5,
                paddingBottom: 5,
                borderColor: "white",
                elevation: 0,
                shadowOpacity: 0,
                borderTopWidth: 0,
                backgroundColor: "white",
            },
    
            
            
        
            
            
            }}

            
        > 

            <Tab.Screen name="Home" component = {Home} options = {{tabBarIcon: ({size, color}) => <Ionicons name={"ios-search"} color={color} size={size}></Ionicons>}}/>
            <Tab.Screen name="Trainings" component = {Training}  options = {{tabBarIcon: ({size, color}) => <MaterialIcon name={"fire"} color={color} size={size +5}></MaterialIcon>}}/>
            <Tab.Screen name="Chat" component = {Chat}  options = {{tabBarIcon: ({size, color}) => <Ionicons name={"ios-chatbubbles"} color={color} size={size}></Ionicons>}}/>
            <Tab.Screen name="Profile" component = {Profile}  options = {{tabBarIcon: ({size, color, focused}) => <View style={{borderWidth: 1, borderRadius: 500, padding: 1, borderColor: focused ? color  : "white"}}><Image style={{width: size, height: size, borderRadius: 600}} source={{uri: 'https://scontent.flpa1-1.fna.fbcdn.net/v/t1.0-9/28378387_194319104495670_684902334457788365_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=54lYhEI9nSUAX_hXtrD&_nc_ht=scontent.flpa1-1.fna&oh=71bbe7e699efd603543c170ca2d000e4&oe=5F84A6EF'}}/></View>}}/>

        </Tab.Navigator>

)
}
