import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusBar } from 'react-native'
import OnBoarding from '../pages/OnBoarding'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'

const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <App.Screen name="OnBoarding" component={OnBoarding} />
      <App.Screen name="Welcome" component={Welcome} />
      <App.Screen name="Login" component={Login} />
    </App.Navigator>
  </>
)

export default AppRoutes
