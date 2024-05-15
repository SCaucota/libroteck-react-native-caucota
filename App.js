import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import ModalCustom from './src/components/modalCustom.jsx';
import TaskInput from './src/components/taskInput.jsx';
import List from './src/components/list.jsx';

export default function App() {

  const [TextItem, setTextItem] = useState("");
  const [ItemList, setItemList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});


  const handleChangeText = (text) => setTextItem(text);
  const addItem = () => {
    setItemList(currentValue => [
      ...currentValue,
      { id: Math.random().toString(), name: TextItem, done: false }
    ]);
    setTextItem("");
  }

  const handleModal = (item) => {
    setItemSelected(item);
    setModalVisible(!modalVisible);
  }

  const handleDelete = () => {
    const filter = ItemList.filter(task => task !== itemSelected);
    setItemList(filter);
    setModalVisible(!modalVisible);
  }

  const handleCancelModal = () => {
    setModalVisible(!modalVisible);
    setItemSelected({});
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TaskInput
          handleChangeText={handleChangeText}
          textItem={TextItem}
          addItem={addItem}
        />
        
        <List
          itemList={ItemList}
          handleModal={handleModal}
        />

        <ModalCustom
          modalVisible={modalVisible}
          handleCancelModal={handleCancelModal}
          handleDelete={handleDelete}
          itemSelected={itemSelected}
        />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  }
});
