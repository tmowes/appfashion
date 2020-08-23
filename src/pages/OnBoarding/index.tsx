import React, { useRef } from 'react'
import { Dimensions } from 'react-native'
import { interpolateColor, useScrollHandler } from 'react-native-redash'
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  Slider,
  HorizontalScrollView,
  Footer,
  FooterWrapper,
  BorderTopLeft,
  PaginationContainer,
  FooterContent,
  Underlay,
  ImageContainer,
} from './styles'
import Slide from './Slide'

import slides from '../../data/slides'
import SubSlide from './SubSlide'
import PaginationDot from './PaginationDot'

const { width } = Dimensions.get('window')

const OnBoarding: React.FC = () => {
  const { navigate } = useNavigation()

  const scroll = useRef<Animated.ScrollView>(null)
  const { scrollHandler, x } = useScrollHandler()
  const backgroundColor: any = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(slide => slide.color),
  })
  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.6) * width,
              index * width,
              (index + 0.6) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          })
          return (
            <Underlay key={index} style={{ opacity }}>
              <ImageContainer
                source={picture.uri}
                style={{
                  width: width - 65,
                  height: ((width - 65) * picture.height) / picture.width,
                  resizeMode: 'cover',
                }}
              />
            </Underlay>
          )
        })}
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
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1
              return (
                <SubSlide
                  key={index}
                  {...{ subtitle, description, last }}
                  onPress={() => {
                    if (last) {
                      navigate('Welcome')
                    } else {
                      scroll.current?.getNode().scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      })
                    }
                  }}
                />
              )
            })}
          </FooterContent>
        </FooterWrapper>
      </Footer>
    </Container>
  )
}

export default OnBoarding
