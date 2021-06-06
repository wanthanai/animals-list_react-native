import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// icon 
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ListItems({ item, deleteItem }) {
    return (
        <TouchableOpacity style={styles.container
        }>
            <View>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.icon}>{item.id}</Text>
            </View>
            <Icon name="remove" size={20} color="firebrick" />
        </TouchableOpacity>
    )
}


// styles 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eeee'
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.4)'
    }
})