import React from 'react'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView, ViewStyle } from 'react-native'

/**
 * styles.
 */
import {
  Input,
  Label,
  Error,
  LeftIcon,
  ButtomIcon,
  RighttIcon,
  ContainerInputPassword
} from './styles'

/**
 * Types.
 */
type TextInputProps = {
  value: string | void
  icon?: string
  label?: string
  style?: ViewStyle
  onPress?: () => void
  inputRef?: any
  leftIcon?: string
  msgError?: string
  placeholder?: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
}

/**
 * Component.
 */
export default function TextInput({
  icon,
  style,
  value,
  label = '',
  leftIcon,
  inputRef,
  onPress = () => {},
  msgError = '',
  placeholder = '',
  onChangeText = text => {}
}: TextInputProps) {
  return (
    <SafeAreaView>
      {label && <Label>{label}</Label>}

      <ContainerInputPassword>
        {leftIcon && !value && <LeftIcon name={leftIcon} />}

        <Input
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={{ ...style }}
        />

        {icon && (
          <ButtomIcon onPress={onPress}>
            <RighttIcon name={icon} style={!value && { opacity: 0.5 }} />
          </ButtomIcon>
        )}
      </ContainerInputPassword>

      {msgError && <Error>{msgError}</Error>}
    </SafeAreaView>
  )
}
