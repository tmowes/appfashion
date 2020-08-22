import React from 'react'

import { SlideProps } from './types'
import { Container, Wrapper, Title } from './styles'

const Slide: React.FC<SlideProps> = ({ title, right }) => {
  return (
    <Container>
      <Wrapper isRight={right}>
        <Title>{title}</Title>
      </Wrapper>
    </Container>
  )
}

export default Slide
