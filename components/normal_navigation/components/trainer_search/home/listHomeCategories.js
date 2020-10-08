import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import HomeCategorie from './homeCategorie'

export default function ListHomeCategories() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
            {
                [1,2,3,4,5,6,7,8].map((obj) => <HomeCategorie key = {obj}></HomeCategorie>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 30
        
    }
})