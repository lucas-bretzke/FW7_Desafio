import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/**
 * Screens
 */
import Home from '../pages/Home'
import Login from '../pages/Login'
import Welcome from '../pages/Welcome'
import Register from '../pages/Register'
import SavedLinksScreen from '../pages/SavedLinksScreen'
import { View, Text, Button, TouchableOpacity } from 'react-native'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SavedLinksScreen'
          component={SavedLinksScreen}
          options={{
            headerTitle: 'Links',
            headerTintColor: '#444444',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => console.log('click')}
                style={{ marginRight: 16 }}
              >
                <Ionicons name='menu' size={24} color='black' />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
