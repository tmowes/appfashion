import React from 'react'
import { StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import OutfitIdeas from '../pages/OutfitIdeas'
import Favorites from '../pages/Favorites'
import DrawerMenu from '../components/DrawerMenu'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator drawerContent={() => <DrawerMenu />}>
      <Screen name="OutfitIdeas" component={OutfitIdeas} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  </>
)

export default DrawerRoutes
