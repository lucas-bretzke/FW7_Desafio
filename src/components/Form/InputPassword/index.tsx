import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { SafeAreaView, ViewStyle } from 'react-native'

/**
 * Styles.
 */
import {
  Input,
  Error,
  Label,
  EyeButton,
  ContainerInputPassword
} from './styles'

/**
 * Types.
 */
type PasswordProps = {
  value: string
  label?: string
  style?: ViewStyle
  onPress?: () => void
  msgError?: string
  placeholder?: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  onSubmitEditing?: () => void
}

/**
 * Component.
 */
export default function InputPassword({
  style,
  label = '',
  value = '',
  msgError = '',
  placeholder = '******',
  onChangeText = text => {},
  onSubmitEditing = () => {}
}: PasswordProps) {
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const visiblePassword = () => setPasswordVisibility(!passwordVisibility)
  return (
    <SafeAreaView>
      <Label>{label || 'Senha'}</Label>

      <ContainerInputPassword>
        <Input
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={!passwordVisibility}
          placeholder={placeholder}
          placeholderTextColor={'#ccc'}
          style={{ ...style }}
        />
        <EyeButton active={passwordVisibility} onPress={visiblePassword}>
          <Feather name={passwordVisibility ? 'eye' : 'eye-off'} size={24} />
        </EyeButton>
      </ContainerInputPassword>

      <Error>{msgError}</Error>
    </SafeAreaView>
  )
}
