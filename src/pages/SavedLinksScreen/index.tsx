import { FlatList } from 'react-native'
import * as Clipboard from 'expo-clipboard'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'

/**
 * Styles.
 */
import {
  Link,
  Spinner,
  Container,
  DateCreated,
  Description,
  TextButtons,
  ModalButtons,
  ModalContent,
  IconFavorite,
  NumberOfLinks,
  ContainerShortenedUrl
} from './styles'

/**
 * Contexts.
 */
import { AuthContext } from '../../contexts/auth'

/**
 * Services.
 */
import api from '../../services/api'

/**
 * Components.
 */
import Button from '../../components/Form/Buttom'
import BaseModal from '../../components/Modal'

/**
 * Types.
 */
type ITypeLink = {
  user_id: number
  link_id: number
  short_url: string
  created_at: Date
  description: string
  is_favorite: boolean
  original_url: string
}

/**
 * Component.
 */
export default function SavedLinksScreen() {
  const navigation = useNavigation<NavigationProp<any>>()
  const { getUserShortenedUrls }: any = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ITypeLink>()
  const [shortenedUrls, setShortenedUrls] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  async function getUrls() {
    try {
      setIsLoading(true)
      const response = await getUserShortenedUrls()

      setShortenedUrls(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  function renderShortenedUrl(item: any) {
    return (
      <ContainerShortenedUrl
        onPress={() => {
          setSelectedItem(item)
          setIsModalVisible(true)
        }}
      >
        <DateCreated>{item.created_at}</DateCreated>
        <Description>{item.description}</Description>
        <Link>{item.short_url}</Link>

        {item.is_favorite && (
          <IconFavorite>
            <MaterialIcons name='favorite' size={18} color='#444444' />
          </IconFavorite>
        )}
      </ContainerShortenedUrl>
    )
  }

  function closeModal() {
    setIsModalVisible(false)
  }

  function copyLink() {
    if (!selectedItem) return

    Clipboard.setString(selectedItem?.short_url),
      alert(`URL Copiada!\n ${selectedItem?.short_url}`)
  }

  async function toggleFavorite() {
    if (!selectedItem) return

    closeModal()
    setIsLoading(true)

    const updatedLink = {
      id: selectedItem.link_id,
      description: selectedItem?.description,
      is_favorite: !selectedItem.is_favorite
    }

    try {
      await api.editShortenedUrl(updatedLink)
    } catch (error) {
      console.log(error)
    } finally {
      getUrls()
      setIsLoading(false)
    }
  }

  async function deleteLink() {
    try {
      setIsLoading(true)
      closeModal()

      if (!selectedItem) return

      await api.deleteShorUrl(selectedItem.link_id)
    } catch (error) {
      console.log(error)
    } finally {
      getUrls()
      setIsLoading(false)
    }
  }

  function ContentModal() {
    const buttons = [
      { text: 'Copiar', onPress: copyLink },
      { text: 'Excluir', onPress: deleteLink },
      {
        text: selectedItem?.is_favorite ? 'Desfavoritar' : 'Favoritar',
        onPress: toggleFavorite
      }
    ]

    return (
      <ModalContent>
        {buttons.map((button, index) => (
          <ModalButtons key={index} onPress={button.onPress}>
            <TextButtons>{button.text}</TextButtons>
          </ModalButtons>
        ))}
      </ModalContent>
    )
  }

  useEffect(() => {
    getUrls()
  }, [])

  return (
    <Container>
      <NumberOfLinks>Links: {shortenedUrls?.length}</NumberOfLinks>
      <FlatList
        data={shortenedUrls}
        renderItem={({ item }) => renderShortenedUrl(item)}
      />

      <BaseModal
        visible={isModalVisible}
        onClose={() => closeModal()}
        container={ContentModal()}
      />

      <Button
        style={{
          position: 'absolute',
          right: 25,
          bottom: 25,
          backgroundColor: 'white'
        }}
        onPress={() => navigation.navigate('Home')}
        title={<Feather name='plus-circle' size={40} color='black' />}
        width={40}
      />

      {isLoading && <Spinner size='large' color='black' />}
    </Container>
  )
}
