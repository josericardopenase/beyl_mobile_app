import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigation from './components/normal_navigation/tabNavigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import LoginNavigation from './components/login_navigation/loginNavigation';
import AuthContext from './auth/context';
import storage from './auth/storage';
import { AppLoading } from 'expo';
import apiProfile from './api/apiProfile';
import ProfileContext from './auth/profileContext';
import PalleteColors from './components/general_components/palleteColors';
import { StatusBar } from 'expo-status-bar';
import Code from './components/login_navigation/Components/code';

export default function App() {
	const [ user, setUser ] = useState();
	const [ profile, setProfile ] = useState();

	const [ loading, setLoading ] = useState(true);

	let [ fontsLoaded ] = useFonts({
		'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
		'poppins-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
		'poppins-black': require('./assets/fonts/Poppins-Bold.ttf')
	});



	const restoreUser = async () => {
		const user = await storage.getUser();
		if (user) setUser(user);
	};

	if (!fontsLoaded) {
		return null;
	}

	const MyTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: !user ? PalleteColors.background : PalleteColors.backgroundSecondary
		}
	};

	if (loading) return <AppLoading startAsync={restoreUser} onFinish={() => setLoading(false)} />;

	return (
		<ProfileContext.Provider value={{ profile, setProfile }}>
			<StatusBar backgroundColor={PalleteColors.background} style={'light'} />
			<AuthContext.Provider value={{ user, setUser }}>
				<NavigationContainer theme={MyTheme}>
					{user ? <TabNavigation /> : <LoginNavigation />}
				</NavigationContainer>
			</AuthContext.Provider>
		</ProfileContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
