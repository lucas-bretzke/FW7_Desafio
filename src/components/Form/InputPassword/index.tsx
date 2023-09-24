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
  EyeButtom,
  ContainerInputPassword
} from './styles'

/**
 * Types.
 */
type PasswordProps = {
  value: string
  style?: ViewStyle
  onPress?: () => void
  msgError?: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  onSubmitEditing?: () => void
}

/**
 * Component.
 */
export default function InputPassword({
  style,
  value = '',
  onPress = () => {},
  msgError = '',
  onChangeText = text => {},
  secureTextEntry = false,
  onSubmitEditing = () => {}
}: PasswordProps) {
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const visiblePassword = () => setPasswordVisibility(!passwordVisibility)
  return (
    <SafeAreaView>
      <Label>Senha</Label>

      <ContainerInputPassword>
        <Input
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={passwordVisibility}
          placeholder='******'
          placeholderTextColor={'#ccc'}
          style={{ ...style }}
        />
        <EyeButtom
          style={
            !passwordVisibility && {
              backgroundColor: '#44444444',
              opacity: 0.5
            }
          }
          onPress={visiblePassword}
        >
          <Feather name={passwordVisibility ? 'eye' : 'eye-off'} size={24} />
        </EyeButtom>
      </ContainerInputPassword>

      <Error>{msgError}</Error>
    </SafeAreaView>
  )
}
