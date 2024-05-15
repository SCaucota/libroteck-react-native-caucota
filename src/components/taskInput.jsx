import { View, Text, TextInput, Button, StyleSheet} from 'react-native'
import React from 'react'

const TaskInput = ({handleChangeText, textItem, addItem}) => {
  return (
    <View style={styles.container}>
      <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={textItem}
          placeholder="Enter item..."
      />
      <Button title="ADD" color="#5555ff" onPress={addItem} />
    </View>
    
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  }
})

export default TaskInput