import { createStackNavigator } from '@react-navigation/stack';
import Base from './Components/base' 
import React from 'react'
import Login from './Components/login';
import Register from './Components/register';
import PalleteColors from '../general_components/palleteColors';
import code from './Components/code';

const Stack = createStackNavigator();

export default function LoginNavigation() {
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
      <Stack.Screen name="Base" component={Base} options={{
          headerShown: false
      }} />
      <Stack.Screen name="Login" component={Login} options={{
          title: ""
      }} />
      <Stack.Screen name="Code" component={code} options={{
          title: ""
      }} />
      <Stack.Screen name="Register" component={Register} options={{
          title: ""
      }} />

    </Stack.Navigator>
  );
}