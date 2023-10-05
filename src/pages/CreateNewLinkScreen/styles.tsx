import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #192436;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerLogo = styled.View`
  flex: 1;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #192436;
`

export const Title = styled.Text`
  font-size: 26px;
  color: white;
  margin-left: 10px;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #023696;
  padding-vertical: 12px;
`

export const ContainerForm = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
`

export const MessageError = styled.View`
    width: 90%,
    color: red
`
export const ContainerButtons = styled.View`
  width: 90%;
  margin-top: 20;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Spinner = styled.ActivityIndicator`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  opacity: 0.2;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const ClearContentButton = styled.View`
  position: absolute;
  right: 5%;
  bottom: 5%;
`
