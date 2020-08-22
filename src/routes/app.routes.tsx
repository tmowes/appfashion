import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusBar } from 'react-native'
import OnBoarding from '../pages/OnBoarding'

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
        cardStyle: { backgroundColor: '#282A36' },
      }}
    >
      <App.Screen name="OnBoarding" component={OnBoarding} />
    </App.Navigator>
  </>
)

export default AppRoutes
