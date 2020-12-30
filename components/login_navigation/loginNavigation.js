import { createStackNavigator } from '@react-navigation/stack';
import Base from './Components/base' 
import React from 'react'
import Login from './Components/login';

const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Base" component={Base} options={{
          headerShown: false
      }} />
      <Stack.Screen name="Login" component={Login} options={{
          headerStyle: {
              backgroundColor: "white",
              elevation: 0,
          },
          title: ""
      }} />

    </Stack.Navigator>
  );
}