import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'

/**
 * Helpers.
 */
import { validateTheEmail } from '../../utils/helpers'

/**
 * Styles.
 */
import styles, {
  Container,
  Title,
  CheckboxLabel,
  KeepMeMonnected,
  ForgotPasswordButton,
  ButtonText,
  CreateAccountButton,
  ButtonContainer
} from './styles'

/**
 * Components.
 */
import Buttom from '../../components/Form/Buttom'
import InputText from '../../components/Form/InputText'
import InputPassword from '../../components/Form/InputPassword'
import { TouchableOpacity } from 'react-native'
import axios from 'axios'

/**
 * Component.
 */
export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgError, setMsgError] = useState('')
  const [checked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  async function singIn() {
    try {
      const res = await axios.post('http://192.168.0.14:3000/login', {
        email: email,
        password: password
      })

      const token = res.data.token
      console.log(res.data)
      // navigation.navigate('Home');
      setMsgError('')
    } catch (error) {
      if (error?.response?.status === 401)
        setMsgError('Email ou senha incorretos.')
    }
  }

  const visibleButtom = validateTheEmail(email) && password.length >= 6

  return (
    <Container>
      <Animatable.View
        delay={1000}
        animation='fadeInLeft'
        style={styles.containerHeader}
      >
        <Title>LOGIN</Title>
      </Animatable.View>

      <Animatable.View
        delay={1500}
        animation='fadeInUp'
        style={styles.containerForm}
      >
        <InputText
          label='E-mail'
          placeholder='example@gmail.comn'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <InputPassword
          value={password}
          msgError={msgError}
          onChangeText={text => setPassword(text)}
        />

        <KeepMeMonnected>
          <TouchableOpacity onPress={toggleCheckbox}>
            <Feather
              name={checked ? 'check-square' : 'square'}
              size={24}
              color={checked ? 'green' : 'gray'}
            />
          </TouchableOpacity>
          <CheckboxLabel>Manter-me conectado!</CheckboxLabel>
        </KeepMeMonnected>

        <Buttom
          title={'Acessar'}
          onPress={singIn}
          disabled={visibleButtom ? false : true}
          bgColor={'#192436'}
        />

        <ButtonContainer>
          <CreateAccountButton onPress={() => navigation.navigate('Register')}>
            <ButtonText>Criar conta</ButtonText>
          </CreateAccountButton>

          <ForgotPasswordButton onPress={() => console.log('click')}>
            <ButtonText>Esquceu a senha?</ButtonText>
          </ForgotPasswordButton>
        </ButtonContainer>
      </Animatable.View>
    </Container>
  )
}
