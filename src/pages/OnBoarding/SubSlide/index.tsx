import React from 'react'

import { Container, SubTitle, Description } from './styles'
import { SubSlideProps } from './types'
import Button from '../../../components/Button'

const SubSlide: React.FC<SubSlideProps> = ({
  subtitle,
  description,
  last,
  onPress,
}) => {
  return (
    <Container>
      <SubTitle>{subtitle}</SubTitle>
      <Description>{description}</Description>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </Container>
  )
}

export default SubSlide
