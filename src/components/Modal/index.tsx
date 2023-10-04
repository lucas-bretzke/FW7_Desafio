import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Text, Modal } from 'react-native'
import { CloseModal, Container, ModalStyled, Title } from './styles'

/**
 * Types.
 */

type IPropsType = {
  title?: string
  visible: boolean
  onClose: () => void
  container: any
}

/**
 * Component.
 */
export default function BaseModal({
  title,
  visible,
  onClose,
  container
}: IPropsType) {
  return (
    <Modal visible={visible} transparent={true}>
      <ModalStyled>
        <Container>
          <CloseModal onPress={onClose}>
            <Feather name='x' size={24} color='black' onPress={onClose} />
          </CloseModal>

          {title && <Title>{title}</Title>}

          {container}
        </Container>
      </ModalStyled>
    </Modal>
  )
}
