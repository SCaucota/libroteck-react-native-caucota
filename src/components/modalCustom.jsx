import { View, Text, Modal, Button, StyleSheet } from 'react-native'
import React from 'react'

const ModalCustom = ({modalVisible, itemSelected, handleCancelModal, handleDelete}) => {
  return (
    <Modal visible={modalVisible} animationType='slide' transparent={true}>
          <View>
            <View>
              <View>
                <Text>Estas seguro que queres borrar:</Text>
              </View>
              <View>
                <Text>{itemSelected.name}</Text>
              </View>
              <View>
                <Button title="Borrar" onPress={handleDelete}/>
                <Button title="Cancelar" onPress={handleCancelModal}/>
              </View>
            </View>
          </View>
        </Modal>
  )
}

export default ModalCustom