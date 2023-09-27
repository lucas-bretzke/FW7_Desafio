import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

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
