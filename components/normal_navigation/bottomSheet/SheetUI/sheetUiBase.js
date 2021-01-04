import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PalleteColors from '../../../general_components/palleteColors';
import Title3 from '../../../general_components/titles/title3';
import ExcersiseVideo from '../../components/training/excersiseVideo';
import Training from '../../components/training/Training';

export default function SheetUiBase({height}) {

      const navigation = useNavigation();

      return (
        
        <View
          style={{
            backgroundColor: 'white',
            height: height,
            padding: 15,
          }}
        >
          <View style={styles.bar}></View>
          <TouchableOpacity title="" onPress={() => { navigation.navigate('Settings') }} >
              <Title3>💪 Manda un reporte</Title3>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    bar : {
        width: 30,
        height: 5,
        backgroundColor: "#d1d1d1",
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: 10
    }
})
