import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import SavedLinksScreen from '../pages/SavedLinksScreen'

const Drawer = createDrawerNavigator()

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='SavedLinksScreen'>
        <Drawer.Screen name='SavedLinksScreen' component={SavedLinksScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
