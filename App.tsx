import React from 'react'
import { SafeAreaView, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Text>Julius Initial</Text>
    </SafeAreaView>
  </NavigationContainer>
)

export default App
