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

function CustomHeader({ navigation }: any) {
  return (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
      }}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name='menu' size={30} color='black' />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, marginLeft: 30 }}>Links</Text>
    </View>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SavedLinksScreen'
          component={SavedLinksScreen}
          options={{
            header: props => <CustomHeader {...props} />
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
