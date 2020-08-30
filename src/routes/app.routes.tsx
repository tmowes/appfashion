import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusBar } from 'react-native'
import OnBoarding from '../pages/OnBoarding'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'
import PasswordChanged from '../pages/PasswordChanged'

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
      <App.Screen name="PasswordChanged" component={PasswordChanged} />
      <App.Screen name="SignUp" component={SignUp} />
      <App.Screen name="ForgotPassword" component={ForgotPassword} />
      <App.Screen name="Login" component={Login} />
      <App.Screen name="OnBoarding" component={OnBoarding} />
      <App.Screen name="Welcome" component={Welcome} />
    </App.Navigator>
  </>
)

export default AppRoutes
