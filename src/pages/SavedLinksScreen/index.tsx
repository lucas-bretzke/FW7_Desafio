import { FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import React, { useContext, useEffect, useState } from 'react'

import {
  Container,
  ContainerShortenedUrl,
  DateCreated,
  DeleteButton,
  Description,
  Link,
  NumberOfLinks,
  Spinner
} from './styles'

import Button from '../../components/Form/Buttom'
import { AuthContext } from '../../contexts/auth'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export default function SavedLinksScreen() {
  const navigation = useNavigation<NavigationProp<any>>()
  const { getUserShortenedUrls }: any = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)
  const [shortenedUrls, setShortenedUrls] = useState()

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
      <ContainerShortenedUrl>
        <DateCreated>{item.created_at}</DateCreated>
        <Description>Minha descrição 01</Description>
        <Link>{item.short_url}</Link>
      </ContainerShortenedUrl>
    )
  }

  useEffect(() => {
    teste()
  }, [])
  return (
    <Container>
      <NumberOfLinks>Links: {shortenedUrls?.length}</NumberOfLinks>
      <FlatList
        data={[
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
        ]}
        renderItem={({ item }) => renderShortenedUrl(item)}
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
