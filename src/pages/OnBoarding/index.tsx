import React, { useRef } from 'react'
import { Dimensions } from 'react-native'
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash'
import Animated, { multiply } from 'react-native-reanimated'
import {
  Container,
  Slider,
  HorizontalScrollView,
  Footer,
  FooterContent,
  BorderTopLeft,
} from './styles'
import Slide from './Slide'

import slides from '../../data/slides'
import SubSlide from './SubSlide'

const { width } = Dimensions.get('window')
const OnBoarding: React.FC = () => {
  const scroll = useRef<Animated.ScrollView>(null)
  const x = useValue(0)
  const onScroll = onScrollEvent({ x })
  const backgroundColor: AnimatedNode<string> = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(slide => slide.color),
  })
  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <HorizontalScrollView {...{ onScroll }} ref={scroll}>
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </HorizontalScrollView>
      </Slider>
      <Footer>
        <BorderTopLeft style={{ backgroundColor }} />
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
      </Footer>
    </Container>
  )
}

export default OnBoarding
