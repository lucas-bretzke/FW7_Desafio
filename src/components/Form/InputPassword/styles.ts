import styled from 'styled-components/native'

export const ContainerInputPassword = styled.View`
  width: 100%;
  flex-direction: row;
  border-color: red;
`

export const Label = styled.Text`
  color: #444444;
  font-size: 16px;
  margin-bottom: 5px;
`

export const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  height: 40px;
  margin-bottom: 12px;
  fontsize: 16px;
`

export const EyeButtom = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  width: 30;
  height: 30;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`

export const Error = styled.Text`
  color: red;
`
