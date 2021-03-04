import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react'
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
import ArticleDetail from './components/home/ArticleDetail';
import useProfile from '../../auth/useProfile';
import apiProfile from '../../api/apiProfile';
import ProgressHistory from './components/progress/progressHistory';
import * as Permissions from 'expo-permissions';
import JoinTrainer from './components/profile/joinTrainer';
import SettingsAccount from './components/profile/settings/settingsAccount';
import SettingsProfile from './components/profile/settings/settingsProfile';

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

    <Stack.Navigator screenOptions={{
      headerTintColor: PalleteColors.textPrimaryColor,
      headerStyle:{
        elevation: 0,
        borderBottomColor: PalleteColors.background,
        backgroundColor: PalleteColors.background,
        borderBottomWidth: 1,

      },
        headerTitleStyle: {
          alignSelf: "center",
          fontFamily: "poppins-bold",
          fontSize: 15
        },
    }
    }>
      <Stack.Screen name="home" component={NormalNavigation} options={({route}) => ({
          headerTransparent: false,
          headerShown: true,
          headerTitle: getHeaderTitle(route),
          
      })} />
      <Stack.Screen name="ImageView" component={ImageView} options={{
      headerTransparent: true,
      headerTitle: "",
      gestureEnabled: true,
      cardStyle : {backgroundColor: "rgba(0,0,0, 0.90)"},
      headerTintColor: PalleteColors.background
    }}   />


      

    <Stack.Screen name="RutineDetail" component={ExcersiseDetail} options={{
            headerTintColor: PalleteColors.background,
            headerTransparent: true,
            headerTitle: "",
            cardStyle: {backgroundColor: PalleteColors.background},
    }}  />

    <Stack.Screen name="ExcersiseVideo" component={ExcersiseVideo} options={{
            headerTintColor: PalleteColors.background,
            headerTransparent: true,
            headerTitle: "",
            gestureEnabled: true,
            cardStyle: {backgroundColor: PalleteColors.background},
    }}  />

    <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{
            headerTintColor: PalleteColors.background,
            headerTransparent: true,
            headerTitle: "",
            cardStyle: {backgroundColor: PalleteColors.background},
    }}  />
    


    <Stack.Screen name="ChatDetail" component={ChatDetail} options={{
            headerTitle: "Jose Ricardo Peña",
            headerTitleContainerStyle: {
              left: 50,
              right: 0,
            },
            headerTitle: props => <ChatTitle></ChatTitle>,
            headerTintColor: PalleteColors.background
      
    }}  />

    <Stack.Screen name="Settings" component={Settings} options={{
            headerTitle: "Ajustes ⚙️",
            cardStyle: {backgroundColor: PalleteColors.background},
    }}  />

    <Stack.Screen name="Progress" component={Progress} options={{
            headerTitle: "Registrar",
            gestureEnabled: true,
            cardStyle: {backgroundColor: PalleteColors.background},
    }}  />

    <Stack.Screen name="ActivitieProgress" component={ActivitieProgress} options={{
            headerTitle: "Registro",
            gestureEnabled: true,
            cardStyle: {backgroundColor: PalleteColors.background},
    }}  />

    <Stack.Screen name="Article" component={ArticleDetail} options={{
            headerTitle: "Artículo",
            gestureEnabled: true,
            cardStyle: {backgroundColor: PalleteColors.background},
    }}  />

    <Stack.Screen name="ProgressHistorial" component={ProgressHistory} options={{
            headerTitle: "Historial",
            gestureEnabled: true,
            cardStyle: {backgroundColor: PalleteColors.backgroundSecondary},
            
    }}  />
    <Stack.Screen name="JoinTrainer" component={JoinTrainer} options={{
            headerTitle: "Unirse a un entrenador",
            gestureEnabled: true,
            cardStyle: {backgroundColor: PalleteColors.background},
            
    }}  />
    <Stack.Screen name="AccountSettings" component={SettingsAccount} options={{
            headerTitle: "Editar cuenta",
            cardStyle: {backgroundColor: PalleteColors.background},
            
           headerTitleStyle: {
              alignSelf: "flex-start",
              fontFamily: "poppins-bold",
              fontSize: 15
            },
    }}  />

    <Stack.Screen name="ProfileSettings" component={SettingsProfile} options={{
            headerTitle: "Editar perfil",
            cardStyle: {backgroundColor: PalleteColors.background},
            
           headerTitleStyle: {
              alignSelf: "flex-start",
              fontFamily: "poppins-bold",
              fontSize: 15
            },
    }}  />
    </Stack.Navigator>

  );
}
