import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function GeneralContainer(props) {
    return (
        <View style={styles.container}>
            <View style={props.style}> 
           {
               props.children
           } 
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})