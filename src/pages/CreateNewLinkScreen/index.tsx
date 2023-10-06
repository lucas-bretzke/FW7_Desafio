import { Feather } from '@expo/vector-icons'
import { Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useContext, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'

/**
 * Services.
 */
import api from '../../services/api'

/**
 * Helpers.
 */
import { urlValidator } from '../../utils/others'

/**
 * Contexts.
 */
import { AuthContext } from '../../contexts/auth'

/**
 * Components.
 */
import Button from '../../components/Form/Buttom'
import TextInput from '../../components/Form/InputText'

/**
 * Styles.
 */
import {
  Title,
  Spinner,
  Container,
  ContainerForm,
  ContainerLogo,
  ClearContentButton
} from './styles'

/**
 * Component.
 */
export default function CreateNewLinkScreen() {
  const navigation = useNavigation<NavigationProp<any>>()
  const { user }: any = useContext(AuthContext)

  const [customUrl, setCustomUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [description, setDescription] = useState('')
  const [originalURL, setOriginalURL] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function generateRandomString(length: number) {
    let newChart = ''

    const chart =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    for (let i = 0; i < length; i++) {
      newChart += chart.charAt(Math.floor(Math.random() * chart.length))
    }

    return newChart
  }

  async function checkFieldsBeforeRequest() {
    setIsLoading(true)
    Keyboard.dismiss()

    if (!urlValidator(originalURL)) {
      setErrorMessage('Ops! URL inválida')
      return setIsLoading(false)
    }

    if (!customUrlIsValid()) {
      setErrorMessage(
        'Customizar a URL é opcional e requer no mínimo 6 letras, sem espaços.'
      )
      return setIsLoading(false)
    }

    await generateShortURL()
    setIsLoading(false)
  }

  async function generateShortURL() {
    try {
      const code = customUrl ? customUrl : generateRandomString(6)

      await api.postShortUrl({
        code: code,
        user_id: user.user_id,
        description: description,
        original_url: originalURL
      })
    } catch (error) {
      console.log('post error:', error)
      setErrorMessage('Ops! Erro interno, volte mais tarde')
    } finally {
      clearFields()
      navigation.navigate('SavedLinksScreen')
    }
  }

  function customUrlIsValid() {
    const hasSpace = customUrl.includes(' ')
    const isValidLength = customUrl.length >= 1 && customUrl.length < 6

    if (hasSpace || isValidLength) return false

    return true
  }

  function clearFields() {
    setErrorMessage('')
    setShortenedUrl('')
    setCustomUrl('')
    setOriginalURL('')
    setDescription('')
  }

  return (
    <Container>
      <ContainerLogo>
        <Feather name='link' size={26} color='blue' />
        <Title>Gerar Link</Title>
      </ContainerLogo>

      <ContainerForm>
        <TextInput
          label='*Descrição'
          value={description}
          onChangeText={text => setDescription(text)}
          placeholder='Descrição do link'
        />

        <TextInput
          label='*Insira sua URL de destino'
          value={originalURL}
          onChangeText={text => setOriginalURL(text)}
          placeholder='Link de destino'
        />

        <TextInput
          label='Customizar URL (opicional)'
          value={customUrl}
          onChangeText={text => setCustomUrl(text)}
          placeholder='bretz.exemplo/Sua-customização-aqui'
          msgError={errorMessage}
        />

        <Button
          onPress={() => checkFieldsBeforeRequest()}
          title='Encurtar link'
          bgColor='#023696'
          style={{ marginTop: 90 }}
        />
      </ContainerForm>

      <ClearContentButton onPress={clearFields}>
        <MaterialIcons name='refresh' size={24} color='#023696' />
      </ClearContentButton>

      {isLoading && <Spinner size='large' color='blue' />}
    </Container>
  )
}
