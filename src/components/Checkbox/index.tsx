import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import Link from '../Link'
import { Container, IconContainer } from './styles'
import { CheckboxProps } from './types'

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, checked }) => {
  const fillColor = checked ? '#2cb9b0' : 'transparent'
  return (
    <Container onPress={() => onChange(!checked)}>
      <IconContainer style={{ backgroundColor: fillColor }}>
        {checked && <Icon name="check" color="white" />}
      </IconContainer>
      <Link label={label} onPress={() => onChange(!checked)} />
    </Container>
  )
}

export default Checkbox
