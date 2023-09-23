import React from 'react'
import { StyledButton, Text } from './styles'

type TypeProps = {
  title: string
  disabled?: boolean
  color?: string
  bgColor?: string
  width?: number | string
  onPress: () => void
}

export default function Button({
  title,
  color = '#fff',
  bgColor = '#192436',
  width = '100%',
  onPress,
  disabled = false
}: TypeProps) {
  return (
    <StyledButton
      disabled={disabled}
      style={{ backgroundColor: bgColor, width: width }}
      onPress={onPress}
    >
      <Text style={{ color: color }}>{title}</Text>
    </StyledButton>
  )
}
