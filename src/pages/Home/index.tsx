import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Text,
  View,
  Keyboard,
  TextInput,
  ActivityIndicator
} from 'react-native'

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

/**
 * Styles.
 */
import styles from './styles'

/**
 * Component.
 */
export default function Home() {
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
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Feather name='link' size={26} color='blue' />
        <Text style={styles.title}>Encurtador de URL</Text>
      </View>

      <View style={styles.urlFormContainer}>
        <View style={styles.containerInput}>
          <Text style={styles.label}>Destino</Text>
          <TextInput
            value={originalURL}
            onChangeText={text => setOriginalURL(text)}
            placeholder='Coloque sua URL aqui'
            style={styles.input}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Título (opcional)</Text>
          <TextInput
            value={customUrl}
            onChangeText={text => setCustomUrl(text)}
            placeholder='ex: MinhaUrl'
            style={styles.input}
          />
        </View>

        {errorMessage && <Text style={styles.msgError}>{errorMessage}</Text>}

        <View style={styles.containerButtons}>
          <Button
            onPress={() => checkFieldsBeforeRequest()}
            title='Encurtar'
            color='#fff'
            bgColor='#023696'
          />
        </View>
      </View>

      <View style={styles.clearContentButton}>
        <Button
          onPress={() => clearContentButton()}
          title='🗑️'
          color='#fff'
          bgColor='#023696'
          width={40}
        />
      </View>

      {isLoading && (
        <ActivityIndicator size='large' color='blue' style={styles.spinner} />
      )}
    </View>
  )
}
