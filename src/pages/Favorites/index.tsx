import React from 'react'
import { ScrollView } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'

import Footer from './Footer'
import { outfits } from './data'
import Outfit from './Outfit'

import {
  Container,
  Content,
  ScrollContent,
  LeftColumn,
  RightColumn,
} from './styles'

const Favorites: React.FC = () => {
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
      <Content>
        <ScrollView>
          <ScrollContent>
            <LeftColumn>
              {outfits
                .filter((_, index) => index % 2 !== 0)
                .map(({ id, color, aspectRatio }) => (
                  <Outfit key={id} {...{ color, aspectRatio }} />
                ))}
            </LeftColumn>
            <RightColumn>
              {outfits
                .filter((_, index) => index % 2 === 0)
                .map(({ id, color, aspectRatio }) => (
                  <Outfit key={id} {...{ color, aspectRatio }} />
                ))}
            </RightColumn>
          </ScrollContent>
        </ScrollView>
      </Content>
      <Footer label="Add to favorites" onPress={() => true} />
    </Container>
  )
}

export default Favorites
