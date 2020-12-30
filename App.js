import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts} from 'expo-font'
import TabNavigation from './components/normal_navigation/tabNavigation';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import LoginNavigation from './components/login_navigation/loginNavigation';
import AuthContext from './auth/context';
import storage from './auth/storage';
import {AppLoading} from 'expo';

export default function App() {
  
  
  const [user, setUser] = useState();  
  const [loading, setLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-black': require('./assets/fonts/Poppins-Bold.ttf'),


  });

  const restoreUser = async() => {
    const user = await storage.getUser();
    if(user) setUser(user);

  }

  if (!fontsLoaded) {
    return null
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: user ? "#f5f5f5" : "white"
    },
  };

  if(loading)
    return <AppLoading startAsync={restoreUser} onFinish={() => setLoading(false)}></AppLoading>

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={MyTheme}>
        
        { 
        
        user ? 

        <TabNavigation></TabNavigation>  
        
        : 

        <LoginNavigation></LoginNavigation> 
        
        }
    </NavigationContainer>
  </AuthContext.Provider>
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
