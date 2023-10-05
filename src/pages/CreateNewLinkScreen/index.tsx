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
  MessageError,
  ContainerForm,
  ContainerLogo,
  ContinueButtom,
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

    if (!customUrlIsValid()) {
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

      await api.postShortUrl({
        user_id: user.id,
        code: code,
        description: description,
        original_url: originalURL
      })

      setShortenedUrl('bretz.up.railway.app/' + code)

      navigation.navigate('SavedLinksScreen')
    } catch (error) {
      console.log('post error:', error)
      setErrorMessage('Ops! Erro interno, volte mais tarde')
    }
  }

  function customUrlIsValid() {
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
        <Title>Gerar Link</Title>
      </ContainerLogo>

      <ContainerForm>
        <TextInput
          label='Descrição'
          value={description}
          onChangeText={text => setDescription(text)}
          placeholder='Descrição do link'
        />

        <TextInput
          label='Insira sua URL de destino'
          value={originalURL}
          onChangeText={text => setOriginalURL(text)}
          placeholder='Link de destino'
        />

        <TextInput
          label='Customizar url'
          value={customUrl}
          onChangeText={text => setCustomUrl(text)}
          placeholder='bretz.exemplo/Sua-customização-aqui'
        />

        {errorMessage && <MessageError>{errorMessage}</MessageError>}

        <ContinueButtom>
          <Button
            onPress={() => checkFieldsBeforeRequest()}
            title='Encurtar link'
            color='#fff'
            bgColor='#023696'
          />
        </ContinueButtom>
      </ContainerForm>

      <ClearContentButton onPress={() => clearContentButton()}>
        <MaterialIcons name='refresh' size={24} color='#023696' />
      </ClearContentButton>

      {isLoading && <Spinner size='large' color='blue' />}
    </Container>
  )
}
