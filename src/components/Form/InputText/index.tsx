import React from 'react'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView, ViewStyle } from 'react-native'
import {
  Input,
  Label,
  Error,
  ButtomIcon,
  ContainerInputPassword
} from './styles'

type TextInputProps = {
  value: string
  icon?: String
  label?: string
  style?: ViewStyle
  onPress?: () => void
  msgError?: string
  placeholder?: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
}

export default function TextInput({
  icon,
  style,
  value,
  label = '',
  onPress = () => {},
  msgError = '',
  placeholder = '',
  onChangeText = text => {}
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
            <Feather
              name={`${icon}`}
              size={24}
              style={!value && { opacity: 0.5 }}
            />
          </ButtomIcon>
        )}
      </ContainerInputPassword>

      <Error>{msgError}</Error>
    </SafeAreaView>
  )
}
