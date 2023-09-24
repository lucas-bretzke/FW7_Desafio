import React from 'react'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView, ViewStyle } from 'react-native'
import {
  ContainerInputPassword,
  EyeButtom,
  Input,
  Error,
  Label
} from './styles'

type PasswordProps = {
  value: string
  onPress?: () => void
  msgError?: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  onSubmitEditing?: () => void
  style?: ViewStyle
}

export default function InputPassword({
  value = '',
  onPress = () => {},
  msgError = '',
  onChangeText = text => {},
  secureTextEntry = false,
  onSubmitEditing = () => {},
  style
}: PasswordProps) {
  return (
    <SafeAreaView>
      <Label>Senha</Label>

      <ContainerInputPassword>
        <Input
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          placeholder='******'
          placeholderTextColor={'#ccc'}
          style={{ ...style }}
        />
        <EyeButtom
          style={
            !secureTextEntry && {
              backgroundColor: '#44444444',
              opacity: 0.5
            }
          }
          onPress={onPress}
        >
          <Feather name={secureTextEntry ? 'eye' : 'eye-off'} size={24} />
        </EyeButtom>
      </ContainerInputPassword>

      <Error>{msgError}</Error>
    </SafeAreaView>
  )
}
