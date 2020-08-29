import React from 'react'

import { Container, Label } from './styles'
import { LinkProps } from './types'

const Link: React.FC<LinkProps> = ({ label, variant = 'default', onPress }) => {
  return (
    <Container variant={variant} {...{ onPress }}>
      <Label variant={variant}>{label}</Label>
    </Container>
  )
}

export default Link
