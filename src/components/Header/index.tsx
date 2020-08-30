import React from 'react'

import { HeaderProps } from './types'
import RoundedIconButton from '../RoundedIconButton'
import { Container, DrawerTitle } from './styles'

const Header: React.FC<HeaderProps> = ({ left, title, right }) => {
  return (
    <Container>
      <RoundedIconButton
        name={left.icon}
        size={18}
        color="white"
        backgroundColor="transparent"
        onPress={left.onPress}
      />
      <DrawerTitle>{title}</DrawerTitle>
      <RoundedIconButton
        name={right.icon}
        size={18}
        backgroundColor="transparent"
        color="white"
        onPress={right.onPress}
      />
    </Container>
  )
}

export default Header
