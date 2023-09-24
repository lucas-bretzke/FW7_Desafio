import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #192436;
  padding: 10px;
`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`

export const KeepMeMonnected = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
`

export const CheckboxLabel = styled.Text`
  margin: 0px 10px;
  color: #4e4b4b;
`

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const ForgotPasswordButton = styled.TouchableOpacity``
export const CreateAccountButton = styled.TouchableOpacity``

export const ButtonText = styled.Text`
  color: #192436;
`

export default StyleSheet.create({
  containerHeader: {
    marginVertical: '14%',
    marginBottom: '19%',
    paddingStart: '5%'
  },

  containerForm: {
    borderRadius: 25,
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    elevation: 2,
    backgroundColor: '#fff'
  }
})
