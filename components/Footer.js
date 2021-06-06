import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>K. Wanthaai</Text>
        </View>
    )
}

// styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: '#fff'
    }
})