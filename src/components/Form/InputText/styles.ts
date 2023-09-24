import styled from 'styled-components/native'

export const ContainerInputPassword = styled.View`
  width: 100%;
  flex-direction: row;
  border-color: red;
`

export const Label = styled.Text`
  color: #646464;
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: -10px;
  z-index: 1;
  width: auto;
  height: 20px;
  padding: 0 4px;
  max-width: 55px;
  background-color: white;
`

export const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #c7c7c7;
  padding: 8px;
  font-size: 16px;
  border-radius: 3px;
  elevation: 2;
  background-color: #fff;
`

export const ButtomIcon = styled.TouchableOpacity`
  top: 8px;
  right: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
`

export const Error = styled.Text`
  color: red;
`
