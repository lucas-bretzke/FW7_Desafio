import React from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'

export default function BaseModal({ visible, onClose, buttons, title }) {
  return (
    <Modal visible={visible} animationType='slide' transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width: '80%'
          }}
        >
          {title && <Text>{title}</Text>}
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={button.onPress}>
              <Text>{button.title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
