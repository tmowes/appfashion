import React from 'react'

import { Container, Label } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'default',
  onPress,
}) => {
  return (
    <Container variant={variant} {...{ onPress }}>
      <Label variant={variant}>{label}</Label>
    </Container>
  )
}

export default Button
