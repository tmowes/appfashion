import React, { useState } from 'react'
import { ScrollView, Dimensions } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'

import Footer from './Footer'
import { defaultOutfits } from './data'
import Outfit from './Outfit'

import {
  Container,
  Content,
  ScrollContent,
  LeftColumn,
  RightColumn,
  FooterOverlay,
} from './styles'

const { width: wWidth } = Dimensions.get('window')

const Favorites: React.FC = () => {
  const { dispatch } = useNavigation()
  const outfitWith = (wWidth - 12 * 2 - 8) / 2
  const [footerHeight, setFooterHeight] = useState(0)
  const [outfits, setOutfits] = useState(defaultOutfits)

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
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 12,
            paddingBottom: footerHeight,
          }}
        >
          <ScrollContent>
            <LeftColumn>
              {outfits
                .filter((_, index) => index % 2 !== 0)
                .map(({ id, color, aspectRatio, selected }) => (
                  <Outfit
                    key={id}
                    {...{ color, aspectRatio, outfitWith, selected }}
                  />
                ))}
            </LeftColumn>
            <RightColumn style={{ marginLeft: 8 }}>
              {outfits
                .filter((_, index) => index % 2 === 0)
                .map(({ id, color, aspectRatio, selected }) => (
                  <Outfit
                    key={id}
                    {...{ color, aspectRatio, outfitWith, selected }}
                  />
                ))}
            </RightColumn>
          </ScrollContent>
        </ScrollView>
        <FooterOverlay
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setFooterHeight(height)}
        >
          <Footer
            label="Add to favorites"
            onPress={() => {
              setOutfits(outfits.filter(outfit => !outfit.selected))
              console.log('outfits', outfits)
            }}
          />
        </FooterOverlay>
      </Content>
    </Container>
  )
}

export default Favorites
