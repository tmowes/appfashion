import React from 'react'

import { HeaderProps } from './types'
import RoundedIconButton from '../RoundedIconButton'
import { Container, DrawerTitle } from './styles'

const Header: React.FC<HeaderProps> = ({ left, title, right, color }) => {
  return (
    <Container>
      <RoundedIconButton
        name={left.icon}
        size={32}
        color={color}
        backgroundColor="transparent"
        onPress={left.onPress}
      />
      <DrawerTitle style={{ color }}>{title}</DrawerTitle>
      <RoundedIconButton
        name={right.icon}
        size={32}
        backgroundColor="transparent"
        color={color}
        onPress={right.onPress}
      />
    </Container>
  )
}

export default Header
