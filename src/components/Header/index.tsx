import React from 'react'
import { Feather } from '@expo/vector-icons'
import InputText from '../Form/InputText'

/**
 * Styles.
 */
import { Container, LeftButtom, RightButtom, StyledIcon, Title } from './styles'

/**
 * Types.
 */
type IHeader = {
  title?: string
  leftIcon?: string
  onPresss?: () => void
  rightIcon?: string
  inputValue?: string
  placeholder?: string
}
/**
 * Component.
 */
export default function Header({
  title = '',
  onPresss,
  leftIcon = '',
  rightIcon = '',
  inputValue = '',
  placeholder = ''
}: IHeader) {
  return (
    <Container>
      {leftIcon && (
        <LeftButtom>
          <StyledIcon name={leftIcon} />
        </LeftButtom>
      )}
      {title && <Title>{title}</Title>}

      {/* <InputText
        value={''}
        onChangeText={text => inputValue}
        placeholder={placeholder}
        style={{ width: 100 }}
      /> */}

      {rightIcon && (
        <RightButtom>
          <StyledIcon name={rightIcon} />
        </RightButtom>
      )}
    </Container>
  )
}
