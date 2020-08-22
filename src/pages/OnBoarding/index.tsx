/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react'
import { Dimensions } from 'react-native'
import { interpolateColor, useScrollHandler } from 'react-native-redash'
import Animated, { multiply, divide } from 'react-native-reanimated'
import {
  Container,
  Slider,
  HorizontalScrollView,
  Footer,
  FooterWrapper,
  BorderTopLeft,
  PaginationContainer,
  FooterContent,
} from './styles'
import Slide from './Slide'

import slides from '../../data/slides'
import SubSlide from './SubSlide'
import PaginationDot from './PaginationDot'

const { width } = Dimensions.get('window')
const OnBoarding: React.FC = () => {
  const scroll = useRef<Animated.ScrollView>(null)
  const { scrollHandler, x } = useScrollHandler()
  const backgroundColor: AnimatedNode<string> = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(slide => slide.color),
  })
  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <HorizontalScrollView {...scrollHandler} ref={scroll}>
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </HorizontalScrollView>
      </Slider>
      <Footer>
        <BorderTopLeft style={{ backgroundColor }} />
        <FooterWrapper>
          <PaginationContainer>
            {slides.map((_, index) => (
              <PaginationDot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index }}
              />
            ))}
          </PaginationContainer>
          <FooterContent
            style={{
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <SubSlide
                key={index}
                last={index === slides.length - 1}
                {...{ subtitle, description, x }}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current.getNode().scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    })
                  }
                }}
              />
            ))}
          </FooterContent>
        </FooterWrapper>
      </Footer>
    </Container>
  )
}

export default OnBoarding
