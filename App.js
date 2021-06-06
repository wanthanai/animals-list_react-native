import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'
// component
import Header from './components/Header'
import ListItems from './components/ListItems'
import AddItem from './components/AddItem'
import Footer from './components/Footer'
// uuid
import uuid from 'react-native-uuid'


//! React functional component
const App = () => {
  // state
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Pig'},
    {id: uuid.v4(), text: 'Cat'},
    {id: uuid.v4(), text: 'Dog'},
    {id: uuid.v4(), text: 'Bird'},
  ]);

  // function 
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    });
  }
  const addItem = (text) => {
    if(!text) {
      Alert.alert('ผิดพลาด', 'กรุณาใส่ข้อมูล!')
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text: text}, ...prevItems]
      })
    }
  }

  // return component
  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) => <ListItems item={item} deleteItem={deleteItem} />} />
      <Footer />
    </View>
  )
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default App;