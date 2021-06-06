import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Animals List</Text>
        </View>
    )
}


// styles
const styles = StyleSheet.create({
    container: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkblue'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    }
})
