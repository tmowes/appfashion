/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import AppProvider from './hooks'

import Routes from './routes'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Routes />
    </View>
  </NavigationContainer>
)

export default App
