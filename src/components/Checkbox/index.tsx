import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'

import Link from '../Link'
import { Container, IconContainer } from './styles'
import { CheckboxProps } from './types'

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false)
  const fillColor = checked ? '#2cb9b0' : 'transparent'
  return (
    <Container onPress={() => setChecked(prev => !prev)}>
      <IconContainer style={{ backgroundColor: fillColor }}>
        {checked && <Icon name="check" color="white" />}
      </IconContainer>
      <Link label={label} onPress={() => setChecked(prev => !prev)} />
    </Container>
  )
}

export default Checkbox
