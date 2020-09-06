import React, { useState } from 'react'

import { Container, Switcher } from './styles'
import { ToggleProps } from './types'

const Toggle: React.FC<ToggleProps> = ({ active }) => {
  const [isState, setIsState] = useState(active)
  return (
    <Container active={isState} onPress={() => setIsState(prev => !prev)}>
      <Switcher active={isState} />
    </Container>
  )
}

export default Toggle
