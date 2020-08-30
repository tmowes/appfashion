import React from 'react'

import { Container, IconCircle, CloseIcon } from './styles'
import { CloseFooterProps } from './types'

const CloseFooter: React.FC<CloseFooterProps> = ({ onPress }) => {
  return (
    <Container>
      <IconCircle onPress={onPress}>
        <CloseIcon />
      </IconCircle>
    </Container>
  )
}

export default CloseFooter
