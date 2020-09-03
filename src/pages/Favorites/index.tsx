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
import FooterTopCurve from './FooterTopCurve'

const { width: wWidth } = Dimensions.get('window')

const Favorites: React.FC = () => {
  const { dispatch } = useNavigation()
  const list = useRef<TransitioningView>(null)
  const outfitWith = (wWidth - 12 * 2 - 8) / 2
  const [footerHeight, setFooterHeight] = useState(0)
  const [outfits, setOutfits] = useState(defaultOutfits)

  const transition = (
    <Transition.Together>
      <Transition.Out type="fade" />
      <Transition.In type="fade" />
    </Transition.Together>
  )

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
          <Transitioning.View ref={list} transition={transition}>
            <ScrollContent>
              <LeftColumn>
                {outfits
                  .filter((_, index) => index % 2 !== 0)
                  .map(outfit => (
                    <Outfit key={outfit.id} {...{ outfit, outfitWith }} />
                  ))}
              </LeftColumn>
              <RightColumn style={{ marginLeft: 8 }}>
                {outfits
                  .filter((_, index) => index % 2 === 0)
                  .map(outfit => (
                    <Outfit key={outfit.id} {...{ outfit, outfitWith }} />
                  ))}
              </RightColumn>
            </ScrollContent>
          </Transitioning.View>
        </ScrollView>
        <FooterTopCurve footerHeight={footerHeight} />
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
              list.current?.animateNextTransition()
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
