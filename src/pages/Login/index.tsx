import * as Animatable from 'react-native-animatable'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

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

  const visibleButtom = validateTheEmail(email) && password.length >= 6

  return (
    <Container>
      <Animatable.View
        delay={1000}
        animation='fadeInLeft'
        style={styles.containerHeader}
      >
        <Title>Faça seu login</Title>
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
          title={'Login'}
          onPress={validateSingIn}
          disabled={visibleButtom ? false : true}
          bgColor={'#192436'}
        />

        <ButtonContainer>
          <CreateAccountButton onPress={() => console.log()}>
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
