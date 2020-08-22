import React from 'react'

import { SlideProps } from './types'
import { Container, Wrapper, Title, Underlay, ImageContainer } from './styles'

const Slide: React.FC<SlideProps> = ({ title, picture, right }) => {
  return (
    <Container>
      <Underlay>
        <ImageContainer source={picture} />
      </Underlay>
      <Wrapper isRight={right}>
        <Title>{title}</Title>
      </Wrapper>
    </Container>
  )
}

export default Slide
