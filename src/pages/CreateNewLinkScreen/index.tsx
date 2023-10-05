import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Text, View, Keyboard, ActivityIndicator } from 'react-native'

/**
 * Services.
 */
import api from '../../services/api'

/**
 * Helpers.
 */
import { urlValidator } from '../../utils/others'

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
  MessageError,
  ContainerForm,
  ContainerLogo,
  ContainerButtons,
  ClearContentButton
} from './styles'

/**
 * Component.
 */
export default function CreateNewLinkScreen() {
  const [customUrl, setCustomUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
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

    if (checkCustomUrl()) {
      setErrorMessage(
        'O título opcional deve conter no mínimo 6 letras e não pode ter espaços.'
      )
    } else if (shortenedUrl) {
      setErrorMessage(
        'Você precisa limpar os campos primeiro!\nClique na lixeira abaixo.'
      )
    } else if (urlValidator(originalURL)) {
      setErrorMessage('')
      await generateShortURL()
    } else {
      setErrorMessage('Ops! URL inválida')
    }

    setIsLoading(false)
  }

  async function generateShortURL() {
    try {
      const code = customUrl ? customUrl : generateRandomString(6)
      await api.postShortUrl(originalURL, code)

      setShortenedUrl('bretz.up.railway.app/' + code)
    } catch (error) {
      console.log('post error:', error)
      setErrorMessage('Ops! Erro interno, volte mais tarde')
    }
  }

  function checkCustomUrl() {
    const hasSpace = customUrl.includes(' ')
    const isValidLength = customUrl.length >= 1 && customUrl.length < 6

    return hasSpace || isValidLength
  }

  function clearContentButton() {
    setErrorMessage(''),
      setShortenedUrl(''),
      setCustomUrl(''),
      setOriginalURL('')
  }

  return (
    <Container>
      <ContainerLogo>
        <Feather name='link' size={26} color='blue' />
        <Title>Encurtar URL</Title>
      </ContainerLogo>

      <ContainerForm>
        <TextInput
          label='Destinho'
          value={originalURL}
          onChangeText={text => setOriginalURL(text)}
          placeholder='Coloque sua URL aqui'
        />

        <TextInput
          label='new url'
          value={customUrl}
          onChangeText={text => setCustomUrl(text)}
          placeholder='ex: MinhaUrl'
        />

        {errorMessage && <MessageError>{errorMessage}</MessageError>}

        <ContainerButtons>
          <Button
            onPress={() => checkFieldsBeforeRequest()}
            title='Encurtar'
            color='#fff'
            bgColor='#023696'
          />
        </ContainerButtons>
      </ContainerForm>

      <ClearContentButton>
        <Button
          onPress={() => clearContentButton()}
          title='🗑️'
          color='#fff'
          bgColor='#023696'
          width={40}
        />
      </ClearContentButton>

      {isLoading && <Spinner size='large' color='blue' />}
    </Container>
  )
}
