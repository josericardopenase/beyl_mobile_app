import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Training from './components/training/Training';
import PalleteColors from '../general_components/palleteColors';
import Chat from './components/chat/chat';
import { Image, View } from 'react-native';
import Profile from './components/profile/profile';
import Home from './components/home/home'
import useAuth from '../../auth/useAuth';
import apiSettings from '../../api/apiSettings';

const Tab = createBottomTabNavigator()

export default function NormalNavigation() {

    const {user} = useAuth();

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

            <Tab.Screen name="Home" component = {Home} options = {{tabBarIcon: ({size, color}) => <Ionicons name={"ios-home"} color={color} size={size}></Ionicons>}}/>
            <Tab.Screen name="Trainings" component = {Training}  options = {{tabBarIcon: ({size, color}) => <MaterialIcon name={"fire"} color={color} size={size +5}></MaterialIcon>}}/>
            <Tab.Screen name="Progress" component = {Training}  options = {{tabBarIcon: ({size, color}) => <Feather name={"plus-circle"} color={color} size={size +5}/>}}/>
            <Tab.Screen name="Chat" component = {Chat}  options = {{tabBarIcon: ({size, color}) => <Ionicons name={"ios-chatbubbles"} color={color} size={size}></Ionicons>}}/>
            <Tab.Screen name="Profile" component = {Profile}  options = {{tabBarIcon: ({size, color, focused}) => <View style={{borderWidth: 1, borderRadius: 500, padding: 1, borderColor: focused ? color  : "white"}}><Image style={{width: size, height: size, borderRadius: 600}} source={{uri: apiSettings.url + user.profile_image }}/></View>}}/>

        </Tab.Navigator>

)
}
