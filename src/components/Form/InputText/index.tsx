import React from 'react'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView, ViewStyle } from 'react-native'
import {
  Input,
  Label,
  Error,
  ContainerInputPassword,
  ButtomIcon
} from './styles'

type TextInputProps = {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  label?: string
  secureTextEntry?: boolean
  onPress?: () => void
  msgError?: string
  style?: ViewStyle
  icon?: String
}

export default function TextInput({
  value = '',
  onChangeText = text => {},
  placeholder = '',
  label = '',
  onPress = () => {},
  msgError = '',
  icon,
  style
}: TextInputProps) {
  return (
    <SafeAreaView>
      {label && <Label>{label}</Label>}

      <ContainerInputPassword>
        <Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={{ ...style }}
        />
        {icon && (
          <ButtomIcon onPress={onPress}>
            <Feather name={`${icon}`} size={24} />
          </ButtomIcon>
        )}
      </ContainerInputPassword>

      <Error>{msgError}</Error>
    </SafeAreaView>
  )
}
