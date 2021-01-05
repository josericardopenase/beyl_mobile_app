import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import NormalNavigation from './normalNavigation';
import ImageView from '../general_components/imageView';
import ExcersiseDetail from './components/training/excersiseDetail';
import RecipeDetail from './components/training/diet/recipeDetail';
import ChatDetail from './components/chat/chatDetail';
import PalleteColors from '../general_components/palleteColors';
import ChatTitle from './components/chat/chat_detail_components/chatTitle';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { View } from 'react-native';
import ExcersiseVideo from './components/training/excersiseVideo'
import Settings from './components/profile/settings';
import Progress from './components/progress/progress';
import ActivitieProgress from './components/progress/Activities/activitieProgress';


const Stack = createStackNavigator();



function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Home':
      return 'Inicio';
    case 'Trainings':
      return 'Tu entrenamiento 💪';
    case 'Chat':
      return 'Chat';
    case 'Profile':
      return 'Perfil'

  }
}

export default function TabNavigation() {
  return (

    <Stack.Navigator >
      <Stack.Screen name="home" component={NormalNavigation} options={({route}) => ({
          headerTransparent: false,
          headerShown: true,
          headerStyle:{
            elevation: 0,
            borderBottomColor: "#f5f5f5",
            borderBottomWidth: 1,
    
          },
          headerTitleStyle: {
            alignSelf: "center",
            fontFamily: "poppins-bold",
            fontSize: 15
          },
          headerTitle: getHeaderTitle(route),
          
      })} />
      <Stack.Screen name="ImageView" component={ImageView} options={{
      headerTransparent: true,
      headerTitle: "",
      gestureEnabled: true,
      cardStyle : {backgroundColor: "rgba(0,0,0, 0.90)"},
      headerTintColor: "white"
    }}   />


      

    <Stack.Screen name="RutineDetail" component={ExcersiseDetail} options={{
            headerTintColor: "white",
            headerTransparent: true,
            headerTitle: "",
            cardStyle: {backgroundColor: "white"},
    }}  />

    <Stack.Screen name="ExcersiseVideo" component={ExcersiseVideo} options={{
            headerTintColor: "white",
            headerTransparent: true,
            headerTitle: "",
            gestureEnabled: true,
            cardStyle: {backgroundColor: "white"},
    }}  />

    <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{
            headerTintColor: "white",
            headerTransparent: true,
            headerTitle: "",
            cardStyle: {backgroundColor: "white"},
    }}  />
    


    <Stack.Screen name="ChatDetail" component={ChatDetail} options={{
            headerStyle:{
              backgroundColor: PalleteColors.mainColor,
              elevation: 0,
            },
            headerTitle: "Jose Ricardo Peña",
            headerTitleStyle: {
              color: "white",
            },
            headerTitleContainerStyle: {
              left: 50,
              right: 0,
            },
            headerTitle: props => <ChatTitle></ChatTitle>,
            headerTintColor: "white"
      
    }}  />

    <Stack.Screen name="Settings" component={Settings} options={{
            headerTitle: "Ajustes ⚙️",
            headerStyle: {
              elevation: 0
            },
            cardStyle: {backgroundColor: "white"},
    }}  />

    <Stack.Screen name="Progress" component={Progress} options={{
            headerTitle: "Registrar",
            headerStyle: {
              elevation: 0
            },
            gestureEnabled: true,
            cardStyle: {backgroundColor: "white"},
    }}  />

    <Stack.Screen name="ActivitieProgress" component={ActivitieProgress} options={{
            headerTitle: "Registro",
            headerStyle: {
              elevation: 0
            },
            gestureEnabled: true,
            cardStyle: {backgroundColor: "white"},
    }}  />
    </Stack.Navigator>
  );
}
