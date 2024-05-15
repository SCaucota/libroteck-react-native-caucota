import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const List = ({ itemList, handleModal }) => {
  return (
    <FlatList
          data={itemList}
          keyExtractor={task => task.id.toString()}
          renderItem={({item, index}) => 
              <TouchableOpacity 
                key={index}
                style={styles.item}
                onPress={() => handleModal(item)}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
          }
          style={styles.list}
    />
  )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
      },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
})

export default List