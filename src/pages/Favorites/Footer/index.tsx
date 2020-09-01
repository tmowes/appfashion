import React from 'react'
import Button from '../../../components/Button'

import { FavoritesFooterProps } from './types'
import { Container } from './styles'

const Footer: React.FC<FavoritesFooterProps> = ({ label, onPress }) => {
  return (
    <Container>
      <Button variant="primary" {...{ label, onPress }} />
    </Container>
  )
}

export default Footer
