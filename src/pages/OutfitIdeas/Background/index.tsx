import React from 'react'
import bgCircles from '../../../assets/OnBoarding/bgcircles.jpg'

import {
  Container,
  ImageContainer,
  ImageBackground,
  BorderTopLeft,
  BorderBottomRight,
  ImageContent,
  TopContainer,
  TopBackground,
  FooterContainer,
  FooterContent,
} from './styles'

const Background: React.FC = () => {
  return (
    <Container>
      <TopContainer>
        <TopBackground />
      </TopContainer>
      <ImageContainer>
        <BorderTopLeft />
        <BorderBottomRight />
        <ImageContent>
          <ImageBackground source={bgCircles} />
        </ImageContent>
      </ImageContainer>
      <FooterContainer>
        <FooterContent />
      </FooterContainer>
    </Container>
  )
}

export default Background
