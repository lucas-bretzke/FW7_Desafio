import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'

type PasswordProps = {
  value: string
  msgError: string
  secureTextEntry: boolean
  onChangeText: (text: string) => void
  onSubmitEditing?: () => void
  onClick: () => void
}

export default function InputPassword(props: PasswordProps) {
  return (
    <SafeAreaView>
      <View style={styles.containerInputPassword}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          secureTextEntry={props.secureTextEntry}
          placeholder='******'
          style={styles.input}
          placeholderTextColor={'#ccc'}
        />
        <TouchableOpacity
          style={[
            styles.eye,
            !props.secureTextEntry && {
              backgroundColor: '#44444444',
              opacity: 0.5
            }
          ]}
          onPress={props.onClick}
        >
          {props.secureTextEntry ? (
            <Feather name='eye' size={24} />
          ) : (
            <Feather name='eye-off' size={24} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={{ color: 'red' }}>{props.msgError}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerInputPassword: {
    width: '100%',
    flexDirection: 'row',
    borderColor: 'red'
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  eye: {
    position: 'absolute',
    right: 0,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  }
})
