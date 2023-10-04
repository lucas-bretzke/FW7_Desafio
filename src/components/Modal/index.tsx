import React from 'react'
import { Text, Modal, TouchableOpacity } from 'react-native'
import { Container, ModalStyled, Title } from './styles'

/**
 * Types.
 */

type IPropsType = {
  title?: string
  visible: boolean
  onClose?: () => void
  container: any
}

/**
 * Component.
 */
export default function BaseModal({
  visible,
  onClose,
  container,
  title
}: IPropsType) {
  return (
    <Modal visible={visible} animationType='slide' transparent={true}>
      <ModalStyled>
        <Container>
          {title && <Title>{title}</Title>}
          {container}

          <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Container>
      </ModalStyled>
    </Modal>
  )
}
