import React from 'react'
import { Text } from 'react-native'

import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Container } from './styles'
import Header from '../../components/Header'

const OutfitIdeas: React.FC = () => {
  const { dispatch } = useNavigation()
  return (
    <Container>
      <Header
        title="Outfit Ideas"
        color="#0c0d34"
        left={{
          icon: 'menu',
          onPress: () => dispatch(DrawerActions.openDrawer()),
        }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />

      <Text style={{ fontSize: 32, textAlign: 'center', color: '#000' }}>
        COMMING SOON...
      </Text>
    </Container>
  )
}

export default OutfitIdeas
