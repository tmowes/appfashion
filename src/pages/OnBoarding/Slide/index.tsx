import React from 'react'

import { SlideProps } from './types'
import { Container, Wrapper, Title } from './styles'

const Slide: React.FC<SlideProps> = ({ label, right }) => {
  return (
    <Container>
      <Wrapper isRight={right}>
        <Title>{label}</Title>
      </Wrapper>
    </Container>
  )
}

export default Slide
