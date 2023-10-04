import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`

export const NumberOfLinks = styled.Text`
  padding: 10px 15px;
  background-color: #eee;
`

export const ContainerShortenedUrl = styled.TouchableOpacity`
  padding: 17px 15px;
  border-bottom-width: 1px;
  border-color: #d6d6d6;
`

export const DateCreated = styled.Text`
  font-size: 13px;
`

export const Description = styled.Text`
  font-size: 15px;
`
export const Link = styled.Text`
  font-size: 13px;
  color: blue;
`

export const ContainerIcons = styled.View`
  position: absolute;
  right: 2%;
  bottom: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const AccessCount = styled.Text`
  margin: 0 5px;
`

export const DeleteButton = styled.TouchableOpacity`
  color: white;
  background-color: red;
  padding: 10px;
  font-size: 18px;
`

export const ModalContent = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
`

export const ModalButtons = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: #d6d6d6;
  padding: 15px 10px;
  margin: 5px 0px;
  width: 240px;
  justify-content: center;
  border-radius: 5px;
`

export const TextButtons = styled.Text`
  font-size: 15px;
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
