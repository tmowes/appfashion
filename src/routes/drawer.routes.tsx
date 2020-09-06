import React from 'react'
import { StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import OutfitIdeas from '../pages/OutfitIdeas'
import Favorites from '../pages/Favorites'
import DrawerMenu from '../components/DrawerMenu'
import Transactions from '../pages/Transactions'
import Profile from '../pages/Profile'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator drawerContent={() => <DrawerMenu />}>
      <Screen name="Profile" component={Profile} />
      <Screen name="Transactions" component={Transactions} />
      <Screen name="Favorites" component={Favorites} />
      <Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Navigator>
  </>
)

export default DrawerRoutes
