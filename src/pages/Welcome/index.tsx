import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable'
import Button from '../../components/Form/Buttom'

type WelcomeTypes = {
  navigation: any
}

export default function Welcome({ navigation }: WelcomeTypes) {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation='flipInY' style={styles.containerLogo}>
        <Feather name='link' size={26} color='blue' />
        <Text style={styles.title}>Encurtador de URL</Text>
      </Animatable.View>

      <Animatable.View
        delay={600}
        animation='fadeInUp'
        style={styles.containerBox}
      >
        <Text style={styles.desc1}>
          Transforme URLs longas em curtas com facilidade!
        </Text>
        <Text style={styles.desc2}>Organize seus links com a Bretz.</Text>
        <View style={styles.containerBtn}>
          <Button
            title='Acessar'
            width={250}
            bgColor='#023696'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </Animatable.View>
    </SafeAreaView>
  )
}
