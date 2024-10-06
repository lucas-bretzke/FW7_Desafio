import InputText from '../Form/InputText'
import { TextInput } from 'react-native'
import React, { useRef, useState } from 'react'

/**
 * Styles.
 */
import { Container, LeftButton, RightButton, StyledIcon, Title } from './styles'

/**
 * Types.
 */
type IHeader = {
  title: string
  leftIcon?: string
  rightIcon?: string
  inputValue?: string
  leftButton?: () => void
  rightButton?: () => void
  placeholder?: string
  onInputChange: any
  canChangeTheInputState?: boolean
}

/**
 * Component.
 */
export default function Header({
  title,
  leftIcon,
  rightIcon,
  inputValue = '',
  leftButton,
  placeholder,
  rightButton,
  onInputChange,
  canChangeTheInputState = false
}: IHeader) {
  const [isInputVisible, setIsInputVisible] = useState(false)
  const inputRef = useRef<TextInput | null>(null)

  // Toggle input visibility and handle title visibility
  const toggleInputVisibility = () => {
    // Clear input value when toggling visibility
    onInputChange('')

    if (canChangeTheInputState) {
      setIsInputVisible(prev => !prev)
    }

    // Focus or blur the input after a slight delay for smoother UX
    setTimeout(() => {
      if (inputRef.current) {
        isInputVisible ? inputRef.current.blur() : inputRef.current.focus()
      }
    }, 100)
  }

  return (
    <Container>
      {leftIcon && (
        <LeftButton onPress={leftButton}>
          <StyledIcon name={leftIcon} />
        </LeftButton>
      )}

      {title && !isInputVisible && <Title>{title}</Title>}

      {isInputVisible && (
        <InputText
          inputRef={inputRef}
          value={inputValue}
          onChangeText={onInputChange}
          leftIcon='magnify'
          style={{ width: 300, borderWidth: 0 }} // Optional: move styles to a separate style file
          placeholder={placeholder}
        />
      )}

      {rightIcon && (
        <RightButton onPress={rightButton || toggleInputVisibility}>
          <StyledIcon name={isInputVisible ? 'close' : rightIcon} />
        </RightButton>
      )}
    </Container>
  )
}
