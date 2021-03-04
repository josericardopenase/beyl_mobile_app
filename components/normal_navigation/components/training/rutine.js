import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, RefreshControl } from 'react-native';
import {Picker} from '@react-native-community/picker'
import { FlatList } from 'react-native';

import apiClientRutine from '../../../../api/apiClientRutine';
import useApiCallback from '../../../../customHooks/useApiCallback';
import GeneralContainer from '../../../general_components/generalContainer';
import PalleteColors from '../../../general_components/palleteColors';
import Title from '../../../general_components/title';
import Excersise from './rutine/excersise';
import ExcersiseGroup from './rutine/excersiseGroup';
import Loading from '../../../general_components/loading';
import ErrorApi from '../../../general_components/error_handling/errorApi';
import * as Notifications from 'expo-notifications';

export default function Rutine() {

	const rutine = useApiCallback(apiClientRutine.getRutine, (data) => {
		if (data.rutine_days !== undefined) if (data.rutine_days.length > 0) if(data.rutine_days[0] !== undefined) return setDay(data.rutine_days[0].id);

		setDay(undefined);
	});

	const dayData = useApiCallback(apiClientRutine.getRutineDay, (data) => {
		setRefreshing(false)
	});

	const [ day, setDay ] = useState();
	const [ refreshing, setRefreshing ] = useState(false);

	const notificationListener = useRef();

	useEffect(() => {
		notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {

			const data = notification.request.content.data;

			if (data) {
				if (data.action === 'reloadRutine') {

					rutine.request();

					if (day != undefined) {
						dayData.request(day);
					}

				}
			}


		});

		rutine.request();
	}, []);

	useEffect(
		() => {
			if (day != undefined) {
				dayData.request(day);
			}
		},
		[ day ]
	);

	const onRefresh = () => {
		setRefreshing(true);
		rutine.request();
		if (day != undefined) {
			dayData.request(day);
		}
	};


	if (rutine.error || day === undefined) {
		if (rutine.error) return <ErrorApi error={rutine.data.detail} />;
		else return <ErrorApi error={'Tu rutina no esta disponible, espera que tu entrenador la termine'} />;
	}

	if (!rutine.loading && !dayData.loading) {
		return (
				<GeneralContainer style={{ marginBottom: 70 }}>

{/* 					{dayData.loading ? null : dayData.data.rutine_groups ? (
						dayData.data.rutine_groups.map((obj) => <ExcersiseGroup key={obj.id} obj={obj} />)
					) : null} */}

 					{dayData.loading ? null : dayData.data.rutine_groups ? (

					<FlatList
						ListHeaderComponent={
							<View
								style={{
									backgroundColor: PalleteColors.mainColor,
									color: 'white',
									borderRadius: 10,
									marginTop: 15
								}}
							>
								<Picker
									style={{ color: 'white', fontFamily: 'poppins-regular' }}
									selectedValue={day}
									onValueChange={(itemValue, itemIndex) => setDay(itemValue)}
								>
									{rutine.data.rutine_days.map((obj) => (
										<Picker.Item key={obj.id} label={obj.name} value={obj.id} />
									))}
								</Picker>
							</View>
						}
						data = {dayData.data.rutine_groups}
						renderItem={({item}) =><ExcersiseGroup obj={item}></ExcersiseGroup>}
						keyExtractor={item => item.id}
						refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
						refreshing={refreshing}
						onRefresh={onRefresh}
						showsVerticalScrollIndicator={false}
						></FlatList>

					) : null} 


				</GeneralContainer>

		);
	} else {
		return <Loading />;
	}
}
