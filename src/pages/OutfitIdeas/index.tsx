import React, { useState } from 'react'

import { useNavigation, DrawerActions } from '@react-navigation/native'
import { useTransition } from 'react-native-redash'
import { sub } from 'react-native-reanimated'
import Header from '../../components/Header'
import { cards, step } from './Card/data'
import Background from './Background'
import Card from './Card'
import Categories from './Categories'
import { Container, Content } from './styles'

const OutfitIdeas: React.FC = () => {
  const { dispatch } = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const animatedIndex = useTransition(currentIndex)
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
      <Content>
        <Background />
        <Categories />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, animatedIndex)}
                onSwipe={() => setCurrentIndex(prev => prev + step)}
                {...{ source, step }}
              />
            ),
        )}
      </Content>
    </Container>
  )
}

export default OutfitIdeas
