import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
// icon
import Icon from 'react-native-vector-icons/FontAwesome'

export default function AddItem({ addItem }) {
    // state
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput value={text} onChangeText={textValue => setText(textValue)} style={styles.input} placeholder="add item..." />
            <TouchableOpacity style={styles.btn} onPress={() => {
                addItem(text);
                // clear input
                setText('');
            }}>
                <Icon style={styles.icon} name="plus" size={15} color="white"/>
                <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

// styles
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eeee'
    },
    btn: {
        backgroundColor: 'darkgreen',
        padding: 9,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    icon: {
        marginRight: 5
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
        color: '#fff'
    }
})
