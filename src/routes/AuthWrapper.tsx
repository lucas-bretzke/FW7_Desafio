import React, { useEffect, useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { AuthContext } from '../contexts/auth' // Importe o contexto de autenticação
import { NavigationProp, useNavigation } from '@react-navigation/native' // Importe o hook useNavigation

const AuthWrapper = () => {
  const { user }: any = useContext(AuthContext)
  const navigation = useNavigation<NavigationProp<any>>()
  // Use o hook useNavigation para obter a referência de navegação

  useEffect(() => {
    // Se estiver carregando, mostre um indicador de carregamento
    // if (isLoading) {
    //   return (
    //     <View
    //       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    //     >
    //       <ActivityIndicator size='large' />
    //     </View>
    //   )
    // }

    // Se o usuário estiver autenticado, redirecione para a tela SavedLinksScreen
    if (user) {
      navigation.navigate('SavedLinksScreen') // Use navigation.replace para redirecionar
    } else {
      // Se o usuário não estiver autenticado, redirecione para a tela Welcome
      navigation.navigate('Welcome') // Use navigation.replace para redirecionar
    }
  }, [user, navigation])

  return null // Este componente não renderiza nada, ele redireciona com base no estado de autenticação
}

export default AuthWrapper
