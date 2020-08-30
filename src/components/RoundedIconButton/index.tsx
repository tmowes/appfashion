import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { RoundedIconButtonProps } from './types'
import { IconContainer } from './styles'

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  name,
  color,
  backgroundColor,
  size,
  onPress,
}) => {
  return (
    <IconContainer
      onPress={onPress}
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    >
      <Icon name={name} size={size * 0.8} color={color} />
    </IconContainer>
  )
}

export default RoundedIconButton
