import { FlatList, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'
import React, { useContext, useEffect, useState } from 'react'

import {
  Container,
  ContainerShortenedUrl,
  DateCreated,
  Description,
  Link,
  NumberOfLinks,
  Spinner
} from './styles'

import Button from '../../components/Form/Buttom'
import { AuthContext } from '../../contexts/auth'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import BaseModal from '../../components/Modal'

export default function SavedLinksScreen() {
  const navigation = useNavigation<NavigationProp<any>>()
  const { getUserShortenedUrls }: any = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [shortenedUrls, setShortenedUrls] = useState([
    {
      created_at: '2023-10-02T17:56:35.666Z',
      link_id: 29,
      original_url: 'https://www.linkedin.com/notifications/?filter=all',
      short_url: 'bretz.up.railway.app/12345678',
      user_id: 32
    },
    {
      created_at: '2023-10-02T17:56:35.666Z',
      link_id: 29,
      original_url: 'https://www.linkedin.com/notifications/?filter=all',
      short_url: 'bretz.up.railway.app/12345678',
      user_id: 32
    },
    {
      created_at: '2023-10-02T17:56:35.666Z',
      link_id: 29,
      original_url: 'https://www.linkedin.com/notifications/?filter=all',
      short_url: 'bretz.up.railway.app/12345678',
      user_id: 32
    },
    {
      created_at: '2023-10-02T17:56:35.666Z',
      link_id: 29,
      original_url: 'https://www.linkedin.com/notifications/?filter=all',
      short_url: 'bretz.up.railway.app/12345678',
      user_id: 32
    },
    {
      created_at: '2023-10-02T17:56:35.666Z',
      link_id: 29,
      original_url: 'https://www.linkedin.com/notifications/?filter=all',
      short_url: 'bretz.up.railway.app/12345678',
      user_id: 32
    }
  ])

  async function teste() {
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
    console.log(item)
    return (
      <ContainerShortenedUrl
        onPress={() => {
          setSelectedItem(item)
          setIsModalVisible(true)
        }}
      >
        <DateCreated>{item.created_at}</DateCreated>
        <Description>Minha descrição 01</Description>
        <Link>{item.short_url}</Link>
      </ContainerShortenedUrl>
    )
  }

  function closeModal() {
    setIsModalVisible(false)
  }

  function copyLink(item: any) {
    Clipboard.setString(item.short_url),
      alert(`URL Copiada!\n ${item.short_url}`)
  }

  function deleteLink() {
    closeModal()
  }

  // useEffect(() => {
  //   teste()
  // }, [])

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
        container={
          <>
            <TouchableOpacity onPress={copyLink}>
              <Text>Copiar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteLink}>
              <Text>Excluir</Text>
            </TouchableOpacity>
          </>
        }
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

      {isLoading && <Spinner size='large' color='blue' />}
    </Container>
  )
}
