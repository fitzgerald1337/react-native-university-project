import React from 'react'
import { NavigationContainer, BaseRouter } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Search from 'components/Search'
import Dashboard from 'components/Dashboard'
import ProfileDetails from 'components/ProfileDetails'
import Repositories from 'components/Repositories'
import WebView from 'components/WebView'
import Notes from 'components/Notes'

export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='STACK_SEARCH'
          component={Search}
          options={{ title: 'Search', headerShown: false }}
        />
        <Stack.Screen
          name='STACK_DASHBOARD'
          component={Dashboard}
        />
        <Stack.Screen
          name='STACK_PROFILE'
          component={ProfileDetails}
          options={{ title: 'Profile Details' }}
        />
        <Stack.Screen
          name='STACK_REPOS'
          component={Repositories}
          options={{ title: 'Repositories' }}
        />
        <Stack.Screen
          name='STACK_WEBVIEW'
          component={WebView}
          options={{ title: 'Repository Details' }}
        />
        <Stack.Screen
          name='STACK_NOTES'
          component={Notes}
          options={{ title: 'Notes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}