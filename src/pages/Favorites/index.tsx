import React, { useState, useRef } from 'react'
import { ScrollView, Dimensions } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import {
  Transitioning,
  Transition,
  TransitioningView,
} from 'react-native-reanimated'
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
  const left = useRef<TransitioningView>(null)
  const right = useRef<TransitioningView>(null)
  const outfitWith = (wWidth - 12 * 2 - 8) / 2
  const [footerHeight, setFooterHeight] = useState(0)
  const [outfits, setOutfits] = useState(defaultOutfits)
  const transition = <Transition.Change interpolation="easeInOut" />

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
              <Transitioning.View ref={left} {...{ transition }}>
                {outfits
                  .filter((_, index) => index % 2 !== 0)
                  .map(outfit => (
                    <Outfit key={outfit.id} {...{ outfit, outfitWith }} />
                  ))}
              </Transitioning.View>
            </LeftColumn>
            <RightColumn style={{ marginLeft: 8 }}>
              <Transitioning.View ref={right} {...{ transition }}>
                {outfits
                  .filter((_, index) => index % 2 === 0)
                  .map(outfit => (
                    <Outfit key={outfit.id} {...{ outfit, outfitWith }} />
                  ))}
              </Transitioning.View>
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
              left.current?.animateNextTransition()
              right.current?.animateNextTransition()
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
