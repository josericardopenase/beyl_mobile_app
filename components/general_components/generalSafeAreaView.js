import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView, StyleSheet,StatusBar } from 'react-native';

export default function GeneralSafeAreaView(props) {
    return (
        <SafeAreaView style={styles.container}>
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
})