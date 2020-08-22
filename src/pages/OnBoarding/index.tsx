import React from 'react'

import {
  Container,
  Slider,
  HorizontalScroll,
  Footer,
  FooterContent,
  BorderTopLeft,
} from './styles'
import Slide from './Slide'

const OnBoarding: React.FC = () => {
  return (
    <Container>
      <Slider>
        <HorizontalScroll>
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Eccentric" />
          <Slide label="Funky" right />
        </HorizontalScroll>
      </Slider>
      <Footer>
        <FooterContent />
        <BorderTopLeft />
      </Footer>
    </Container>
  )
}

export default OnBoarding
