import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import NormalNavigation from './normalNavigation';
import TrainerDetail from './components/trainer_search/trainerDetail';
import TrainerPlansPage from './components/trainer_search/trainer_detail/trainerPlansPage';
import ImageView from '../general_components/imageView';
import Rutine from './components/training/rutine';
import ExcersiseDetail from './components/training/excersiseDetail';
import Diet from './components/training/diet';
import RecipeDetail from './components/training/diet/recipeDetail';
import ChatDetail from './components/chat/chatDetail';
import PalleteColors from '../general_components/palleteColors';
import { Image, Text } from 'react-native';
import ChatTitle from './components/chat/chat_detail_components/chatTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();



function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Home':
      return 'Busca tu entrenador';
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
      <Stack.Screen name="TrainerDetail" component={TrainerDetail} options={{
        headerTransparent: true,
        headerTitle: "",
        cardStyle : {backgroundColor: "white"},
        
      }}  />

    <Stack.Screen name="TrainerPlans" component={TrainerPlansPage} options={{
        headerTransparent: true,
        headerTitle: "",
        
      }}  />
      <Stack.Screen name="ImageView" component={ImageView} options={{
      headerTransparent: true,
      headerTitle: "",
      gestureEnabled: true,
      cardStyle : {backgroundColor: "rgba(0,0,0, 0.90)"},
      headerTintColor: "white"
    }}   />


      

    <Stack.Screen name="RutineDetail" component={ExcersiseDetail} options={{
            headerTransparent: true,
            headerTitle: "",
            cardStyle: {backgroundColor: "white"},
    }}  />

    <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{
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

    </Stack.Navigator>
  );
}