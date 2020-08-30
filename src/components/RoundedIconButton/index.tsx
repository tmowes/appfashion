import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { RoundedIconButtonProps } from './types'
import { Container, IconContainer } from './styles'

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  name,
  color,
  backgroundColor,
  size,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <IconContainer style={{ backgroundColor, borderRadius: size / 2 }}>
        <Icon name={name} size={size} color={color} />
      </IconContainer>
    </Container>
  )
}

export default RoundedIconButton
