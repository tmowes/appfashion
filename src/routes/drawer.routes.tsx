import React from 'react'
import { StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import OutfitIdeas from '../pages/OutfitIdeas'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator screenOptions={{}}>
      <Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Navigator>
  </>
)

export default DrawerRoutes
