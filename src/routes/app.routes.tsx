import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusBar } from 'react-native'
import OnBoarding from '../pages/OnBoarding'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'
import PasswordChanged from '../pages/PasswordChanged'
import DrawerRoutes from './drawer.routes'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Screen name="OnBoarding" component={OnBoarding} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="PasswordChanged" component={PasswordChanged} />
      <Screen name="DrawerRoutes" component={DrawerRoutes} />
    </Navigator>
  </>
)

export default AppRoutes
