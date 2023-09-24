import * as Animatable from 'react-native-animatable'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

/**
 * Styles.
 */
import styles, { Container, Title } from './styles'
import InputText from '../../components/Form/InputText'
import Buttom from '../../components/Form/Buttom'
import InputPassword from '../../components/Form/InputPassword'

/**
 * Component.
 */
export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <Container>
      <Animatable.View delay={1000} animation='fadeInUp'>
        <Title style={styles.containerHeader}>Crie sua conta</Title>

        <View style={styles.containerForm}>
          <InputText
            value={email}
            label='E-mail'
            icon='mail'
            placeholder='example@gmail.comn'
            onChangeText={text => setEmail(text)}
          />
          <InputPassword
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <InputPassword
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />

          <Buttom
            title={'Confirmar'}
            onPress={() => console.log('ddd')}
            disabled={false}
            style={{ marginTop: 20 }}
          />
        </View>
      </Animatable.View>
    </Container>
  )
}
