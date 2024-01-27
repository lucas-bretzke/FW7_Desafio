import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens.
import Login from '../pages/Login'
import Welcome from '../pages/Welcome'
import CreateAccount from '../pages/CreateAccount'
import SavedLinksScreen from '../pages/SavedLinksScreen'
import CreateNewLinkScreen from '../pages/CreateNewLinkScreen'
import AuthWrapper from './AuthWrapper'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName='DrawerSavedLinksScreen'>
      <Drawer.Screen
        name='DrawerSavedLinksScreen'
        component={SavedLinksScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AuthWrapper'
        component={AuthWrapper}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CreateNewLinkScreen'
        component={CreateNewLinkScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CreateAccount'
        component={CreateAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SavedLinksScreen'
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
