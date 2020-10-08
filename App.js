import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts} from 'expo-font'
import TabNavigation from './components/normal_navigation/tabNavigation';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';

export default function App() {
  

   

  let [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-black': require('./assets/fonts/Poppins-Bold.ttf'),


  });

  if (!fontsLoaded) {
    return null
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#f5f5f5'
    },
  };
  
  return (
    <NavigationContainer theme={MyTheme}>
    <TabNavigation></TabNavigation> 
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
