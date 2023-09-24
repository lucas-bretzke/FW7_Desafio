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
