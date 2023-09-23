import * as Animatable from 'react-native-animatable'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

/**
 * Helpers.
 */
import { validateTheEmail } from '../../utils/helpers'

/**
 * Styles.
 */
import styles from './styles'

/**
 * Components.
 */
import InputPassword from '../../components/Form/InputPassword'
import Buttom from '../../components/Form/Buttom'

/**
 * Component.
 */
export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgError, setMsgError] = useState('')
  const [passwordVisibility, setPasswordVisibility] = useState(true)

  function singIn() {
    navigation.navigate('Home')
  }

  function validateSingIn() {
    if (validateTheEmail(email) && password.length >= 6) {
      singIn()
    }

    if (!email || !password) {
      setMsgError('E-mail inválido!')
    }
  }

  const visiblePassword = () => setPasswordVisibility(!passwordVisibility)
  const visibleButtom = validateTheEmail(email) && password.length >= 6

  return (
    <View style={styles.container}>
      <Animatable.View
        delay={600}
        animation='fadeInLeft'
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder='fulano@gmail.com'
          style={styles.input}
          placeholderTextColor={'#ccc'}
        />
        <Text style={styles.title}>Senha</Text>
        <InputPassword
          value={password}
          msgError={msgError}
          onChangeText={text => setPassword(text)}
          secureTextEntry={passwordVisibility}
          onClick={visiblePassword}
        />
        <Buttom
          title={'Login'}
          onPress={validateSingIn}
          disabled={visibleButtom ? false : true}
          bgColor={`${visibleButtom ? '#192436' : '#4444'}`}
        />

        <Text style={styles.registerText}>Cadastre-se</Text>
      </Animatable.View>
    </View>
  )
}
