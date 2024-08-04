import { Alert, Keyboard, View } from 'react-native'
import { BackHandler } from 'react-native'
import * as Animatable from 'react-native-animatable'
import React, { useContext, useEffect, useState } from 'react'

/**
 * Services.
 */
import api from '../../services/api'

/**
 * Utils.
 */
import { validatePassword, validateTheEmail } from '../../utils/form'

/**
 * Components.
 */
import Buttom from '../../components/Form/Buttom'
import InputText from '../../components/Form/InputText'
import InputPassword from '../../components/Form/InputPassword'

/**
 * Styles.
 */
import styles, { Container, Spinner, Title } from './styles'

/**
 * Contexts.
 */
import { AuthContext } from '.././../contexts/auth'

/**
 * Component.
 */
export default function CreateAccount() {
  const { singIn }: any = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [msgError, setMsgError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const validateForm = async () => {
    if (!name) {
      setMsgError('Preencha o nome')
      return false
    }

    if (!validateTheEmail(email)) {
      setMsgError('email inválido')
      return false
    }

    if (password.length < 6) {
      setMsgError('A senha deve conter no minimo 6 caracteres')
      return false
    }

    if (!validatePassword(password)) {
      setMsgError(
        `A senha deve conter no mínimo um caractere especial, um número e uma letra maiúscula.`
      )
      return false
    }

    if (password !== confirmPassword) {
      setMsgError('Os campos de senha devem ser iguais')
      return false
    }

    const emailExists = await api.checkIfTheEmailIsAlreadyRegistered(email)
    if (emailExists?.status === 200) {
      setMsgError('Este email já está cadastrado')
      return false
    }

    setMsgError('')
    return true
  }

  async function login() {
    setLoading(true)

    try {
      await singIn(email, password)
    } catch (error) {
      setMsgError('Email ou senha incorretos.')
    } finally {
      clearState()
      setLoading(false)
    }
  }

  async function createAccount() {
    setLoading(true)
    Keyboard.dismiss()

    try {
      if (await validateForm()) {
        await api.createUser(name, email, password)
        login()
      }
    } catch (error) {
      setMsgError('Erro interno, volte mais tarde')
    } finally {
      setLoading(false)
    }
  }

  function clearState() {
    setName('')
    setEmail('')
    setMsgError('')
    setPassword('')
    setConfirmPassword('')
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return loading ? true : false
      }
    )

    return () => backHandler.remove()
  }, [loading])

  return (
    <>
      <Container>
        <Animatable.View delay={1000} animation='fadeInUp'>
          <Title style={styles.containerHeader}>Crie sua conta</Title>

          <View style={styles.containerForm}>
            <InputText
              value={name}
              label='Nome'
              icon='account'
              placeholder='Nome'
              onChangeText={text => setName(text)}
            />

            <InputText
              value={email}
              label='E-mail'
              icon='email'
              placeholder='example@gmail.comn'
              onChangeText={text => setEmail(text)}
            />
            <InputPassword
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <InputPassword
              placeholder='Confirmar senha'
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              msgError={msgError}
            />

            <Buttom
              title={'Confirmar'}
              onPress={() => createAccount()}
              disabled={false}
              style={{ marginTop: 20 }}
            />
          </View>
        </Animatable.View>
      </Container>
      {loading && <Spinner size='large' color='black' />}
    </>
  )
}
